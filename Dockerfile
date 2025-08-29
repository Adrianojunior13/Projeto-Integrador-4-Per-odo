# Estágio 1: Instalação de dependências
FROM node:22-alpine AS deps
WORKDIR /app
# PRIMEIRO COPIE TUDO, DEPOIS INSTALE
COPY . .
RUN npm install

# Estágio 2: Ambiente de Desenvolvimento (Comentado, pode ser removido)
#FROM node:22-alpine AS development
#...

# Estágio 3: Build de Produção
FROM node:22-alpine AS builder
WORKDIR /app
# Copie as dependências já instaladas do estágio anterior
COPY --from=deps /app/node_modules ./node_modules
# Copie o código-fonte novamente (ou use o do estágio deps)
COPY . .
RUN npm run build

# Estágio 4: Imagem de Produção Final
FROM node:22-alpine AS production
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
CMD ["npm", "run", "start"]