# Usa una imagen base con Node.js y Nginx para servir la aplicación
FROM node:18 as build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente
COPY . .

# Compila el proyecto
RUN npm run build

# Usa una imagen ligera de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos compilados desde la fase de construcción
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto en el que Nginx sirve la aplicación (por defecto es 80)
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
