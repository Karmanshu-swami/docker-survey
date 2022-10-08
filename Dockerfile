FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm init -y

RUN  npm install express \
npm ejs \
npm install mongo \
npm install mongoose \
npm install dotenv

COPY . .

CMD ["npm" , "run" , "start"]

EXPOSE 5000
