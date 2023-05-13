FROM node:18.16.0-slim

RUN npm i -g npm@latest

USER node
WORKDIR /home/node/app