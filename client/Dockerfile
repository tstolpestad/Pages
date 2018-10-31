FROM node:10-alpine as base
WORKDIR /usr/src
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn run build
RUN yarn run lint
RUN yarn run test

FROM node:10-alpine
WORKDIR /usr/src
ENV NODE_ENV="production"
ENV PORT=3000
COPY --from=base /usr/src .
EXPOSE 3000
CMD ["npm", "start"]
