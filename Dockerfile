FROM node:12-alpine

RUN mkdir -p /opt && mkdir -p /opt/iiost

ADD . /opt/iiost

WORKDIR /opt/iiost

RUN npm install && npm run client:build

CMD ["node", "./server/index.js"]
