import taskHero from "../assets/task-hero.png";

function Header() {
  return (
    <header className="header">

      <div className="brand">
        <div className="brand-icon">✓</div>

        <div>
          <h1>Task Manager</h1>
          <p>Small steps every day, lead to big results ✨</p>
        </div>
      </div>

      <img
        src={taskHero}
        alt="Task management"
        className="task-hero"
      />

    </header>
  );
}

export default Header;