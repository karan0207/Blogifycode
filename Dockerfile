
# Use a node-based image as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/app

# Copy only package.json and package-lock.json to the working directory first
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Run the build process
RUN npm install typescript
RUN npm run build

# Expose necessary ports
EXPOSE 3000
# EXPOSE 9999

# Start the application in production mode
CMD ["npm","run","dev"]

