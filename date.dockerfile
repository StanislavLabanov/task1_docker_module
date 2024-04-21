FROM node:18

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3005

CMD ["node", "date.js"]