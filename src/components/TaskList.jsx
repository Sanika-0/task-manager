import emptyTasks from "../assets/empty-tasks.png";
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  toggleTask,
  editTask,
  deleteTask
}) {
  // EMPTY TASK STATE
  if (tasks.length === 0) {
    return (
      <div className="empty">

        <img
          src={emptyTasks}
          alt="No tasks available"
          className="empty-image"
        />

        <h3>No tasks found</h3>

        <p>
          Add a new task to get started.
        </p>

      </div>
    );
  }

  // TASK LIST
  return (
    <div className="task-list">

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}

    </div>
  );
}

export default TaskList;