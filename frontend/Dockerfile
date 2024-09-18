# Stage 1: Build the prod app
FROM node:22-alpine as build-stage

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm run build

# Stage 2: Serve the app using NGINX
FROM nginx:stable-alpine

COPY --from=build-stage /app/out/ /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

ENV NODE_ENV=production

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
