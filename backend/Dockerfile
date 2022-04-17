FROM node:16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --quiet
COPY . .

EXPOSE 801