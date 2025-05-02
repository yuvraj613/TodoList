import styles from "./todoitem.module.css";
function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleCLick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
    // console.log(todos);
  }
  const Strike = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <h3>
          <span
            style={{ textDecoration: item.done ? "line-through" : "none" }}
            onClick={() => handleCLick(item.name)}
          >
            {item.name}
          </span>

          <span>
            <button
              onClick={() => handleDelete(item)}
              className={styles.deleteButton}
            >
              {" "}
              x{" "}
            </button>
          </span>
        </h3>

        <hr className={styles.line} />
      </div>
    </div>
  );
}

export default TodoItem;
