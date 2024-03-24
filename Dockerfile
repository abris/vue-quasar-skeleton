# Use the official Node.js 16 LTS image as a parent image
FROM node:lts

# Set the working directory inside the container
WORKDIR /app

RUN npm install -g @vue/cli
# Ensure that your container has Bash installed (optional, as most Node images include it)
RUN apt-get update && apt-get install -y bash

