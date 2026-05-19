# Use Node 24
FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build the Next.js production bundle
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
