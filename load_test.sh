#!/bin/bash

echo "Starting load test..."

# Simulate high load
ab -n 1000 -c 100 http://localhost:3000/api/user-data

echo "Load test completed!"

