# Use a lightweight version of Node 24
FROM node:24-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of our application code
COPY . .

# Expose port 4000 and start the server
EXPOSE 4000
CMD ["npm", "start"]
