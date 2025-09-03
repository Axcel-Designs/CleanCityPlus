# Capstone Project: CleanCity+ – Interactive Waste Management Tracker (React)

<!-- [URL]() -->

## Project Brief

Build a React web app called CleanCity+ that educates users on waste categories and helps them log, track, and visualize their recycling efforts. The project will emphasize React fundamentals (components, props, state, hooks) and JavaScript interactivity (CRUD operations, search, charts, and persistence with localStorage).

### Core Features

```md
1. Homepage
A Navbar component (links to Home, Waste Categories, Recycling Tracker, Pledge).
Hero section with call-to-action and key recycling facts.
A FactGenerator component that shows a random “Did You Know?” fact when a button is clicked.

2. Waste Categories Page
Accordion component (Bootstrap/React-Bootstrap) to show waste types: Plastic, Organic, E-waste, Paper, Glass.
Each section contains tips and disposal info.

3. Recycling Tracker Page
A TrackerForm component where users add recycled items (category + quantity).
A TrackerTable component to display all logs with options to:
Edit entry (update quantity).
Delete entry.
Use localStorage (via useEffect) to persist data.
A Chart component (using Chart.js or Recharts) to show total recycled items per category.
Add search & sort functionality (by category or quantity).
Achievement badges: when users recycle more than 10 items in a category, show a badge.

4. Pledge Page
PledgeForm component → Users submit their pledge.
PledgeList component → Displays all pledges from localStorage.
Show a counter of total pledges made.

5. Responsive Design
Use React-Bootstrap for responsive grids, cards, accordion, modals, and tables.
```
