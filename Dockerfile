FROM node:alpine
WORKDIR /app
COPY package.json /app
RUN npm i
COPY . /app
CMD npm start
EXPOSE 3000