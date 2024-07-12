#!/bin/bash

echo "Starting deployment process..."

# Pull the latest changes from the repository
git pull origin main

# Install dependencies
npm install

# Run database migrations (if any)
npm run migrate

# Restart the application
pm2 restart all

echo "Deployment completed successfully!"

