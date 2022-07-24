FROM node:alpine

WORKDIR /app

EXPOSE 8000

COPY package*.json /app/

RUN npm install

COPY . /app/

CMD ["npm", "run", "dev"]

