FROM node:14

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @vue/cli @vue/cli-service-global

CMD ["npm", "run", "serve"]