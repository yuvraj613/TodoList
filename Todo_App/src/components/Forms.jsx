import { useState } from "react";
import styles from "./form.module.css";

function Forms({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false }); // ✅ Correct reset
  }
  return (
    <>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <input
            className={styles.mordernInput}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            type="text"
            value={todo.name}
            placeholder="Enter Todo items..."
          />
          <button
            style={{
              display: "inline-block",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#f7ca18",
              padding: "12px 20px",
              color: "#ffffff",
              cursor: "pointer",
            }}
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default Forms;
