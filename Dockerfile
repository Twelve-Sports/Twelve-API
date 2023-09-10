FROM node:20.0-alpine As development

WORKDIR /home/TwelveAPI

COPY package*.json .
COPY . .

RUN npm i

CMD sleep 50
CMD npm run start:dev
