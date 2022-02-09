FROM node:16.10.0-slim
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
# RUN yarn
COPY . .
# COPY .env.production .env
RUN yarn build --noninteractive
ENV NODE_ENV production
USER node
CMD [ "yarn", "start:prod" ]
