FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React Native app
RUN npm i

# Expose the desired port (e.g., 3000 for React Native Metro Bundler)
EXPOSE 3000

# Start the React Native app
CMD ["npm", "run", "start"]