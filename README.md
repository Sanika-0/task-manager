# Task Manager Web App

A responsive Task Manager Web App built using React.js and Vite.  
This project was developed as an assignment to manage daily tasks in a simple and user-friendly interface.

## Objective

The objective of this project is to build a responsive Task Manager Web App where users can add, edit, delete, complete, and manage their tasks.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed or pending
- Filter tasks by All, Pending, and Completed
- Search tasks by title, description, or priority
- Set task priority: Low, Medium, and High
- Add due dates to tasks
- Task statistics: Total, Pending, and Completed
- LocalStorage persistence
- Responsive design for desktop, tablet, and mobile
- Hover effects and smooth transitions
- Empty task state with illustration

## Tech Stack

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite
- LocalStorage

## React Concepts Used

- Functional Components
- useState
- useEffect
- useMemo
- Props
- Custom Hook
- Component-based architecture

## Project Structure

```text
src/
├── assets/
│   ├── task-hero.png
│   ├── empty-tasks.png
│   └── productivity.png
│
├── components/
│   ├── Header.jsx
│   ├── TaskForm.jsx
│   ├── TaskItem.jsx
│   ├── TaskList.jsx
│   └── FilterBar.jsx
│
├── hooks/
│   └── useLocalStorage.js
│
├── App.jsx
├── index.css
└── main.jsx