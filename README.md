# Goal

The goal of this project is to have a vue 3 (vite) frontend in a docker with nginx, ready to use.

# Run

## dev

In the docker-compose, check that there is a `.dev` at the end of the dockerfile in the `front` service.
then run `docker compose up -d`.
to stop, `docker compose down`.

## prod

When ready to go to production, simply remove the `.dev`.