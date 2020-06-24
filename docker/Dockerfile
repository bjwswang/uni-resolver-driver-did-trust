FROM node:10.20.1-alpine3.11
MAINTAINER bjwswang <bjwswang@gmail.com>

WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm run build
RUN rm -rf src

ENV DRIVER_ID=driver-universalresolver/driver-did-trust
ENV RESOLVER=http://did.360.cn/resolve/v1

EXPOSE 8080

CMD [ "npm", "run", "start" ]
