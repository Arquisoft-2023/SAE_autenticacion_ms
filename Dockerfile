FROM node:18

WORKDIR /src

RUN npm install i npm@latest -g 

COPY package.json package-lock*.json ./

RUN npm install

COPY . .

#Servidor
ENV PORT=3022
ENV URI=0.0.0.0

EXPOSE 3022

CMD ["npm", "start"]
