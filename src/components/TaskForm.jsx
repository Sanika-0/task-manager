import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate task title
    if (!title.trim()) {
      alert("Please enter a task title.");
      return;
    }

    // Create new task
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      priority,
      dueDate,
      completed: false,
    };

    // Add task
    addTask(newTask);

    // Clear form
    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDueDate("");
  };

  return (
    <form
      className="task-form"
      onSubmit={handleSubmit}
    >

      {/* TASK TITLE */}

      <input
        type="text"
        placeholder="✏️ Enter task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        aria-label="Task title"
      />


      {/* DESCRIPTION */}

      <textarea
        placeholder="📝 Enter task description..."
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        aria-label="Task description"
      />


      {/* PRIORITY, DATE & BUTTON */}

      <div className="form-row">

        {/* PRIORITY */}

        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
          aria-label="Task priority"
        >
          <option value="Low">
            🟢 Low Priority
          </option>

          <option value="Medium">
            🟡 Medium Priority
          </option>

          <option value="High">
            🔴 High Priority
          </option>
        </select>


        {/* DUE DATE */}

        <input
          type="date"
          value={dueDate}
          onChange={(e) =>
            setDueDate(e.target.value)
          }
          aria-label="Task due date"
        />


        {/* ADD BUTTON */}

        <button type="submit">
          + Add Task
        </button>

      </div>

    </form>
  );
}

export default TaskForm;