# ----------------------
# Etapa 1 - Build do app
# ----------------------
FROM node:18-alpine AS build

# Define diretório de trabalho
WORKDIR /app

# Copia arquivos de dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Faz o build do Vite
RUN npm run build

# ----------------------
# Etapa 2 - Servindo app
# ----------------------
FROM nginx:stable-alpine AS production

# Remove arquivos padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia o build do Vite para o nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expondo a porta 80
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
