import { useMemo, useState } from "react";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

import useLocalStorage from "./hooks/useLocalStorage";

import productivity from "./assets/productivity.png";

import "./index.css";

function App() {
  const [tasks, setTasks] = useLocalStorage(
    "task-manager-tasks",
    []
  );

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // ADD TASK

  const addTask = (task) => {
    setTasks((previousTasks) => [
      task,
      ...previousTasks
    ]);
  };

  // COMPLETE / INCOMPLETE

  const toggleTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed
            }
          : task
      )
    );
  };

  // DELETE TASK

  const deleteTask = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) {
      return;
    }

    setTasks((previousTasks) =>
      previousTasks.filter(
        (task) => task.id !== id
      )
    );
  };

  // EDIT TASK

  const editTask = (updatedTask) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === updatedTask.id
          ? updatedTask
          : task
      )
    );
  };

  // FILTER + SEARCH

  const filteredTasks = useMemo(() => {
    let result = [...tasks];

    // Completed filter

    if (filter === "completed") {
      result = result.filter(
        (task) => task.completed
      );
    }

    // Pending filter

    if (filter === "pending") {
      result = result.filter(
        (task) => !task.completed
      );
    }

    // Search

    if (search.trim()) {
      const keyword = search.toLowerCase();

      result = result.filter((task) => {
        const title =
          task.title?.toLowerCase() || "";

        const description =
          task.description?.toLowerCase() || "";

        const priority =
          task.priority?.toLowerCase() || "";

        return (
          title.includes(keyword) ||
          description.includes(keyword) ||
          priority.includes(keyword)
        );
      });
    }

    return result;
  }, [tasks, filter, search]);

  // STATISTICS

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks =
    totalTasks - completedTasks;

  return (
    <div className="app">

      {/* HEADER */}

      <Header />

      <main className="container">

        {/* STATISTICS */}

        <div className="stats">

          <div className="stat-card total-card">
            <span>📋</span>

            <h2>{totalTasks}</h2>

            <p>Total Tasks</p>
          </div>

          <div className="stat-card pending-card">
            <span>⏳</span>

            <h2>{pendingTasks}</h2>

            <p>Pending</p>
          </div>

          <div className="stat-card completed-card">
            <span>✅</span>

            <h2>{completedTasks}</h2>

            <p>Completed</p>
          </div>

        </div>

        {/* ADD NEW TASK */}

        <section className="section">

          <div className="section-heading">

            <span className="heading-icon">
              +
            </span>

            <h2>Add New Task</h2>

          </div>

          <TaskForm
            addTask={addTask}
          />

        </section>

        {/* MY TASKS */}

        <section className="section">

          <div className="section-title">

            <h2>📋 My Tasks</h2>

            <span>
              {filteredTasks.length} task(s)
            </span>

          </div>

          {/* FILTER + SEARCH */}

          <FilterBar
            filter={filter}
            setFilter={setFilter}
            search={search}
            setSearch={setSearch}
          />

          {/* TASK LIST */}

          <TaskList
            tasks={filteredTasks}
            toggleTask={toggleTask}
            editTask={editTask}
            deleteTask={deleteTask}
          />

        </section>

        {/* MOTIVATION CARD */}

        <div className="motivation-card">

          <img
            src={productivity}
            alt="Productivity"
            className="productivity-image"
          />

          <div>

            <h3>
              Stay Productive ✨
            </h3>

            <p>
              Small progress every day leads
              to big results. Keep completing
              your tasks!
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}

export default App;