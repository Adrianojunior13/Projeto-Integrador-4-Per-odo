# Etapa 1: build do Vite
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: servidor Node
FROM node:18

WORKDIR /app

# Copia apenas os arquivos necessários
COPY --from=build /app/dist ./dist
COPY server.js package*.json ./

RUN npm install --omit=dev

EXPOSE 3000
CMD ["node", "server.js"]
