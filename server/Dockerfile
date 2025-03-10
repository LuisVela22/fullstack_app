#imagen para trabajar con una version reciente de node
FROM node:18

#esyablecemos nuestro dir raix como 'app'
WORKDIR /app


# Copiar archivos y dependencias
COPY package.json package-lock.json ./
#para construir las dependencias de nuestro proyecto
RUN npm install

#copiar el resto del codigo
COPY . .

#exponer el puerto del backend
EXPOSE 3001

# Comando para ejecutar el backend
CMD ["npm", "run", "dev1"]
