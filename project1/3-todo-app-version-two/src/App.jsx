import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "buy Milk",
      dueDate: "4/10/2026",
    },
    {
      name: "go to college",
      dueDate: "4/10/2026",
    },
    {
      name: "go to hostel",
      dueDate: "4/10/2026",
    },
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
      <todoItems />
    </center>
  );
}

export default App;
