FROM node:17-alpine AS development

# Add a work directory
WORKDIR /app

# Cache and install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy app files
COPY . .

EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]