function FilterBar({
  filter,
  setFilter,
  search,
  setSearch
}) {
  return (
    <div className="filter-container">

      {/* FILTER BUTTONS */}

      <div className="filter-buttons">

        <button
          type="button"
          className={
            filter === "all" ? "active" : ""
          }
          onClick={() => setFilter("all")}
        >
          📋 All
        </button>


        <button
          type="button"
          className={
            filter === "pending" ? "active" : ""
          }
          onClick={() => setFilter("pending")}
        >
          ⏳ Pending
        </button>


        <button
          type="button"
          className={
            filter === "completed" ? "active" : ""
          }
          onClick={() => setFilter("completed")}
        >
          ✅ Completed
        </button>

      </div>


      {/* SEARCH */}

      <input
        className="search-input"
        type="text"
        placeholder="🔍 Search tasks..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        aria-label="Search tasks"
      />

    </div>
  );
}

export default FilterBar;