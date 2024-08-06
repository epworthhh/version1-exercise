[![Node.js](https://img.shields.io/badge/node.js-v14.x-darkgreen)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/express-4.19.2-lightgrey)](https://expressjs.com/)
[![React](https://img.shields.io/badge/react-18.3.1-lightblue)](https://reactjs.org/)
[![Cypress](https://img.shields.io/badge/cypress-13.13.2-turquoise)](https://www.cypress.io/)

---

# Movies List App

## Setting up the backend

1. Navigate to the `backend` directory:

   ```sh
   cd backend
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the backend server:
   ```sh
   node index.js
   ```

The backend server should now be running on `http://localhost:3001`.

## Setting up the frontend

1. Navigate to the `frontend` directory:

   ```sh
   cd frontend
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the frontend development server:
   ```sh
   npm start
   ```

The frontend application should now be running on `http://localhost:3000`.

## Running tests

### e2e tests

```sh
npx cypress open
```