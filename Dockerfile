# Utiliza una imagen base de Nginx

FROM nginx:alpine
COPY ./public /usr/share/nginx/html
# Expone el puerto 80
EXPOSE 80

# Al iniciar el contenedor, Nginx se ejecutará automáticamente
