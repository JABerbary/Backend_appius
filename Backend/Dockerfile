# Stage 1: Build Stage
FROM node:16.20.2-slim AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to utilize Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Nest.js application
RUN npm run build

# Stage 2: Production Stage
FROM node:16.20.2-slim

# Set the working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/dist ./dist

# Copy the node_modules from the builder stage
COPY --from=builder /app/node_modules ./node_modules

# Copy other necessary files
COPY package*.json ./

# Expose port 4000
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/main"]