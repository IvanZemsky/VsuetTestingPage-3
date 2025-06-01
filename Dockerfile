FROM node:24-alpine3.20 as build

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM nginx:stable-alpine

COPY --from=build build /dist /usr/share/nginx/html/
COPY --from=build nginx.conf /etc/nginx/nginx.conf.d/default.conf 

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]


