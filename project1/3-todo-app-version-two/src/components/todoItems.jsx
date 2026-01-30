import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem  todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}

      {/* <TodoItem todoDate={"4/10/2023"} todoName={"Buy Milk"} /> */}
    </div>
  );
};

export default TodoItems;
