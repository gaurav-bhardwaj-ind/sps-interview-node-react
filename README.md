# SPS Interview Node + React Boilerplate

This repository is a monorepo boilerplate for technical interview. It contains a minimal setup for a Node.js backend (Express) and a React frontend (Vite), designed for rapid development and testing during interview.

---

## Project Structure

```
apps/
  api/    # Node.js backend (Express)
  web/    # React frontend (Vite)
```

---

## Getting Started

### 1. Install Dependencies

From the root directory, run:

```bash
npm install
```

This will install dependencies for all workspaces (frontend and backend).

---

### 2. Run the Applications

To start both the frontend and backend in development mode, run:

```bash
npm run dev
```

- **Frontend:** http://127.0.0.1:5173
- **Backend:**  http://127.0.0.1:3000

This uses [Turborepo](https://turbo.build/) to run both apps concurrently.

---

## Application Details

### Backend (Node.js/Express)
- Located in `apps/api`
- Main entry: `index.js`
- Example endpoint: `/add?a=1&b=2` (returns the sum of two numbers)
- Dev server: `npm run dev` (uses nodemon)
- Test: `npm test` (uses Jest)

### Frontend (React/Vite)
- Located in `apps/web`
- Main entry: `src/main.jsx`, `src/App.jsx`
- Dev server: `npm run dev` (uses Vite)
- Lint: `npm run lint`
- Build: `npm run build`

---

## Running Tests

To run tests for an individual application, navigate to its directory and run the test command:

### Backend
```bash
cd apps/api
npm test
```

## Notes
- This is a boilerplate for interview use. The actual problem will be provided during the interview.
- You may add additional dependencies or scripts as needed.

---

## Troubleshooting
- Ensure you are using Node.js v18 or higher.
- If ports 3000 or 5173 are in use, stop the conflicting processes or change the ports in the respective configs.
