FROM node:18-alpine
RUN apk upgrade --update -q
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install & npm install -g nodemon

COPY . .

CMD ["nodemon", "app.js"]