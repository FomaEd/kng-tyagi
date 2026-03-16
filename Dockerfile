FROM node:18-alpine
WORKDIR /app
COPY . .
RUN rm -rf node_modules
RUN npm install --production
EXPOSE 3000
CMD ["node", "index.js"]
