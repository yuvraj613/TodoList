import TodoItem from "./TodoItem.jsx";
import styles from "./todolist.module.css";
const TodoList = ({ todos, setTodos }) => {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};
export default TodoList;
