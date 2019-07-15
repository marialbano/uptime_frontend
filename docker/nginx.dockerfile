FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY docker/conf/uptime.conf /etc/nginx/conf.d/