FROM node:16-bullseye

ENV ENVVAR_TEST valorDentroDaVar

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . . 

EXPOSE 8080

CMD ["npm", "start"]