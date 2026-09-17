import { useState } from "react";

function TaskItem({
  task,
  toggleTask,
  editTask,
  deleteTask
}) {
  // EDIT MODE
  const [isEditing, setIsEditing] = useState(false);

  // EDIT FORM VALUES
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(
    task.description || ""
  );
  const [priority, setPriority] = useState(
    task.priority || "Medium"
  );
  const [dueDate, setDueDate] = useState(
    task.dueDate || ""
  );

  // SAVE EDITED TASK
  const handleSave = () => {
    if (!title.trim()) {
      alert("Please enter a task title.");
      return;
    }

    const updatedTask = {
      ...task,
      title: title.trim(),
      description: description.trim(),
      priority: priority,
      dueDate: dueDate
    };

    editTask(updatedTask);

    setIsEditing(false);
  };

  // CANCEL EDIT
  const handleCancel = () => {
    setTitle(task.title);
    setDescription(task.description || "");
    setPriority(task.priority || "Medium");
    setDueDate(task.dueDate || "");

    setIsEditing(false);
  };

  return (
    <div
      className={`task-card ${
        task.completed ? "completed" : ""
      }`}
    >

      {/* CHECKBOX */}

      <input
        className="task-check"
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      {/* EDIT MODE */}

      {isEditing ? (
        <div className="edit-form">

          {/* TITLE */}

          <input
            type="text"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            placeholder="Enter task title..."
          />

          {/* DESCRIPTION */}

          <textarea
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            placeholder="Enter task description..."
          />

          {/* PRIORITY + DATE */}

          <div className="edit-row">

            <select
              value={priority}
              onChange={(e) =>
                setPriority(e.target.value)
              }
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

            <input
              type="date"
              value={dueDate}
              onChange={(e) =>
                setDueDate(e.target.value)
              }
            />

          </div>

          {/* SAVE + CANCEL */}

          <div className="edit-buttons">

            <button
              type="button"
              className="save-btn"
              onClick={handleSave}
            >
              💾 Save
            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={handleCancel}
            >
              ❌ Cancel
            </button>

          </div>

        </div>
      ) : (
        <>
          {/* TASK DETAILS */}

          <div className="task-details">

            <h3>
              {task.title}

              {task.priority === "High" && (
                <span className="star">
                  ★
                </span>
              )}
            </h3>

            {/* DESCRIPTION */}

            {task.description && (
              <p>
                {task.description}
              </p>
            )}

            {/* PRIORITY + DUE DATE */}

            <div className="task-meta">

              <span
                className={`priority ${
                  task.priority?.toLowerCase() ||
                  "medium"
                }`}
              >
                {task.priority || "Medium"}
              </span>

              {task.dueDate && (
                <span className="due-date">
                  📅 {task.dueDate}
                </span>
              )}

            </div>

          </div>

          {/* STATUS */}

          <div className="task-status">

            {task.completed ? (
              <span className="status completed-status">
                ✓ Completed
              </span>
            ) : (
              <span className="status pending-status">
                ○ Pending
              </span>
            )}

          </div>

          {/* ACTION BUTTONS */}

          <div className="task-actions">

            <button
              type="button"
              className="edit-btn"
              onClick={() => setIsEditing(true)}
              title="Edit Task"
            >
              ✏️
            </button>

            <button
              type="button"
              className="delete-btn"
              onClick={() => deleteTask(task.id)}
              title="Delete Task"
            >
              🗑️
            </button>

          </div>
        </>
      )}

    </div>
  );
}

export default TaskItem;