# React Jobs App

Simple jobs react application to view, add and remove jobs. Jobs are requested via a `jobs.json` file and interacted with via local hosted JSON server mock API ([info here](https://www.npmjs.com/package/json-server)).

This project was used to learn React and is taken from Traversy Media ([youtube video](https://www.youtube.com/watch?v=LDB4uaJ87e0&t=6389s)).

## App Features

- Browse, add, remove, and edit jobs

## Implementation

- Built with **React** using **Vite**
- Mock backend with **JSON-server** and `jobs.json` file
- **Tailwind** used for styling

## Usage

1. Launch JSON server via `npm run server`
2. In separate terminal launch app using `npm run dev`
3. Click on localhost 3000 link
4. Browse, add, remove, or edit jobs

## Project Structure

- `pages`

  - `HomePage.jsx` - Main Homepage
  - `JobsPage.jsx` - View all jobs
  - `JobPage.jsx` - View job info
  - `AddJobPage`, `EditJobPage` - Pages for adding and altering jobs
  - `NotFoundPage.jsx` - Custom 404 page

- `components`- Main components used
  - `Navbar.jsx`
  - `JobListing.jsx`
  - `BackLink.jsx`
  - `Card.jsx`

## Potential Improvements and Modifications

- Run backend on a remote server such as Firebase, rather than locally hosted
- Add authentication to differentiate between employers and potential employees
