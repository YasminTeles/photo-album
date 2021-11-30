FROM node:14-alpine

WORKDIR /photo-album

COPY Makefile package.json yarn.lock ./

RUN apk add --update make

RUN make setup

COPY . .
RUN make build

EXPOSE 3000

CMD ["yarn", "start"]
