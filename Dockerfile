# Use the official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN --mount=type=cache,target=/root/.cache/yarn yarn install

# Copy the rest of the application files
COPY . .

# Expose the app's port
EXPOSE 3000

# Define the command to run the app
CMD ["yarn", "start"]


# Commands

# docker build -t docker-demo .

# docker run -p 3000:3000 docker-demo-simple
# docker run -p 3000:3000 docker-demo