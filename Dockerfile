FROM nginx:latest


COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./frontend /var/www/html