FROM node:latest

USER root

EXPOSE $PORT

COPY package.json package-lock.json server build /opt/app/
COPY server /opt/app/server
COPY build /opt/app/build

WORKDIR /opt/app

RUN npm install --only=production

CMD [ "npm", "start" ]
