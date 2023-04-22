# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /backend
WORKDIR /backend

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining backend files
COPY . .

# Expose port 4000 to the Docker host
EXPOSE 4000

# Start the backend server
CMD ["npm", "start"]
