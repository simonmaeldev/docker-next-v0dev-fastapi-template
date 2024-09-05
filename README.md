# Goal

The goal of this project is to have a stack ready to use for a website.

Components:
- vue 3 (vite) for the front, served by nginx 
- fastapi with uvicorn for the back
- nginx act as a reverse proxy
- everything is dockerized

# Run

## dev

In the docker-compose, check that there is a `.dev` at the end of the dockerfile in the `front` service.
then run `docker compose up -d`.
to stop, `docker compose down`.

## prod

When ready to go to production, simply remove the `.dev`.