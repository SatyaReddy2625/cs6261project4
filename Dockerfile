# Stage 1: Build Angular app
FROM node:14 as build

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy Angular app source code
COPY . .

# Build Angular app
RUN npm run build

# Stage 2: Serve Angular app with Nginx
FROM nginx:alpine

# Copy built app from previous stage
COPY --from=build /app/dist/cs6261project4 /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
