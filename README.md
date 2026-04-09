# Calendar Task App

This is a simple calendar-based task management app built using Next.js and tailwind css.

## Features

* Interactive calendar (using react-calendar,npm i react-calendar)
* Add tasks for the current day
* Maximum 2 tasks per day
* Edit,and  delete tasks as completed
* Tasks are stored in localStorage (no backend added)
* Clean UI with a card-based layout

## Tech Stack

* Next.js (App Router)
* React
* Tailwind CSS
* react-calendar

## Why these choices?

* **Next.js**: Easy setup and good structure for scalable apps
* **Tailwind CSS**: Fast styling and clean UI
* **react-calendar**: Lightweight and customizable calendar component
* **localStorage**: Keeps it simple without needing a database

## How to run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-usernamefrontend_challenge.git
   ```

2. Navigate into the project:

   ```bash
   cd frontend_challenge
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open in browser:

   ```
   http://localhost:3000
   ```

## Notes

* Tasks can only be added for the current day
* Data is stored in browser storage, so it will reset if cleared



---
