# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /frontend
WORKDIR /frontend

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining frontend files
COPY . .

# Build the app
RUN npm run build

# Expose port 3000 to the Docker host
EXPOSE 3000

# Start the frontend server
CMD ["npm", "start"]
