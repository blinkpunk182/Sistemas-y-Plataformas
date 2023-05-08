# # Imagen base de Node.js
# FROM node:14-alpine

# # Directorio de trabajo
# WORKDIR /app

# # Copiar archivos necesarios
# COPY package*.json ./
# COPY src ./src
# COPY tests ./tests

# # Instalar dependencias
# RUN npm install

# # Exponer puerto del servidor
# EXPOSE 3000

# # Comando para iniciar el servidor
# CMD ["npm", "start"]



# Etapa 1: Construir el código fuente
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Ejecutar pruebas
FROM build AS test
ENV NODE_ENV=test
RUN npm run test

# Etapa 3: Desplegar aplicación en un servidor Node.js
FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY --from=build /app/dist ./dist
CMD ["npm", "run", "multistage"]