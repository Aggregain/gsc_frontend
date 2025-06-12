FROM node:16.20.2-bullseye-slim as build-stage

WORKDIR /app

COPY package*.json ./

# Можно указать зеркало, чтобы избежать 503
RUN npm config set registry https://registry.npmmirror.com

RUN npm ci || npm install

COPY . .

RUN npm run build


# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY conf.d/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
