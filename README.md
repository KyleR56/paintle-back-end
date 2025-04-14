# Paintle Back End

Paintle is a fun daily puzzle game inspired by Wordle where players solve a puzzle by painting a 5x5 grid. Each day, a new puzzle is released, and players must fill a 5x5 grid with the correct colors.

The back end of Paintle is developed using Node.js as the runtime enviornment, Express as the core framework, and Docker for containerization. See below for instructions on how to run and build the project.

## Installing dependancies

To install the required packages, run

```bash
npm install
```

## Development server

To start a local development server, run:

```bash
npm start
```

## Building

Note: you must have Docker installed and running in order to build and run the Docker image.

To build and tag the Docker image, run:

```bash
npm run docker-build
```

To run the Docker image locally, run:

```bash
npm run docker-run
```
