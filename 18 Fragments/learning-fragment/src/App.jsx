import FoodItems from "./components/FoodItems";
import Item from "./components/Item";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = ["dal", "Green Vagetable", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>

      <FoodInput></FoodInput>
      <FoodItems items={foodItems}></FoodItems>
      <ErrorMessage items={foodItems}></ErrorMessage>
    </Container>
  );
}

export default App;
