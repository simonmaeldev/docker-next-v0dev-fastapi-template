# Scalable Web Application Template

This project provides a scalable template for a web application using Vue.js, FastAPI, and Nginx, all containerized with Docker.

## Components

- Frontend: Vue 3 (Vite) served by Nginx
- Backend: FastAPI with Uvicorn
- Reverse Proxy: Nginx
- Microservices: Example 'pong' service
- Everything is dockerized for easy deployment and scaling

## Build and Run

### Development

1. Ensure Docker and Docker Compose are installed on your system.
2. Clone this repository.
3. In the `docker-compose.yml` file, verify that the frontend service uses `Dockerfile.dev`.
4. Run the following command to start the development environment:

   ```
   docker compose up -d
   ```

5. To stop the services:

   ```
   docker compose down
   ```

### Production

1. In the `docker-compose.yml` file, change the frontend service to use `Dockerfile` (without `.dev`).
2. Build and run the production environment:

   ```
   docker compose up -d --build
   ```

## API Endpoints

The application provides several endpoints for health checks and basic functionality:

- `/api/ping`: Returns a "pong" response. This demonstrates the communication between the backend and the pong microservice.
- `/api/health`: Backend health check endpoint.
- `/api/system-health`: Checks the health of all services (backend and microservices).
- `/nginx-health`: Nginx health check endpoint.

## Health Check URLs

To check the health of different components:

1. Nginx Reverse Proxy: `http://localhost/nginx-health`
2. Backend API: `http://localhost/api/health`
3. System-wide health: `http://localhost/api/system-health`
4. Frontend Nginx: `http://localhost/nginx-health`

## Scalability

This template is structured to be scalable. You can add more microservices by:

1. Creating a new service directory under `services/`
2. Adding the service to the `docker-compose.yml` file
3. Updating the `backend/app/main.py` to include routing to the new service

Remember to update the README as you add new services or endpoints.

## Notes

- The template currently responds with "pong" when accessing `/api/ping`, demonstrating the basic structure for microservice communication.
- Modify and expand upon this template to fit your specific application needs.
