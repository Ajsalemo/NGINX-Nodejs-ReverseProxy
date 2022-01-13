FROM node:16-alpine3.15

# Create app directory
WORKDIR /usr/src/app

COPY yarn.lock ./
COPY package.json ./
RUN yarn install

COPY . .

EXPOSE 8080
CMD [ "yarn", "start" ]