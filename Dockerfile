FROM node:12-alpine

RUN mkdir -p /opt && mkdir -p /opt/iiost

ADD . /opt/iiost

WORKDIR /opt/iiost

RUN mv vue.config.js.prod vue.config.js

RUN npm install && npm run build

CMD ["node", "index.js"]
