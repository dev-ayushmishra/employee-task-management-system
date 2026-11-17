# Enterprise Employee & Task Management System

A full-stack internal operations and workflow tracking portal designed to manage employees, assign departmental tasks, monitor real-time status updates, and track team productivity.

## Key Features
- **Operational Dashboard:** Live metrics tracking Total Tasks, In-Progress workflows, and Completed deliverables.
- **Task Assignment & Priority Queue:** Assign tasks across departments (IT, Operations, Supply Chain) with priority tags (`High`, `Medium`, `Low`) and due dates.
- **RESTful API Architecture:** Built with Express.js to handle CRUD operations and relational queries seamlessly.
- **Relational SQL Schema:** Normalized `employees` and `tasks` tables with Foreign Key constraints and `LEFT JOIN` reporting.

## Tech Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Backend:** Node.js, Express.js, CORS
- **Database:** MySQL / Relational SQL (`mysql2`)

## Project Structure
```text
employee-task-management-system/
├── database/
│   └── schema.sql       # Relational tables & seed data
├── public/
│   └── index.html       # Frontend operations dashboard
├── server.js            # Express REST API & DB connection
├── package.json         # Project dependencies
└── README.md            # Documentation

