FROM nginx:alpine

LABEL org.opencontainers.image.title="Ta Dang Khoi - My-CV"
LABEL org.opencontainers.image.description="Static personal CV and portfolio website"

COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
