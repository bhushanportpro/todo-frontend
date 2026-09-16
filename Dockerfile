FROM node:24-alpine

WORKDIR /frontend

RUN adduser -D bhushan
RUN chown -R bhushan:bhushan /frontend

COPY package*.json ./
RUN npm ci

COPY --chown=bhushan:bhushan . .

RUN npm run build

USER bhushan

EXPOSE 3000
CMD ["npm", "start"]