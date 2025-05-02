import Forms from "./Forms.jsx";
import { useState } from "react";
import TodoList from "./TodoList.jsx";
import Footer from "./Footer.jsx";

function Todo() {
  //   console.log(todos);
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const remainingTodos = todos.filter((todo) => !todo.done).length;
  // console.log(completedTodos);
  return (
    <>
      <Forms todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} remainingTodos={remainingTodos} />
    </>
  );
}
export default Todo;
