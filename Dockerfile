# Use official Node.js 18 LTS base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the Fastify server
CMD ["npm", "start"]

#   docker build -t fastify-app .

#   docker run -p 3000:3000 fastify-app

#   docker compose up --build