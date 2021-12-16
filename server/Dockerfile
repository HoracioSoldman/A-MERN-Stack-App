FROM node:14-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --silent


COPY . .

EXPOSE 3005

CMD ["npm","start"]