FROM node:14-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

RUN mkdir -p /home/node/app/media

RUN chown -R root:root /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER root

RUN npm install

COPY --chown=root:root . .

RUN chmod 777 media

EXPOSE 2500

CMD [ "node", "app.js" ]