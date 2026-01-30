
import FoodItems from "./components/FoodItems";
import Item from "./components/Item";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
   let foodItems = ['dal','Green Vagetable','Roti','Salad','Milk'] 
  return (

    <>
      <h1 className="food-heading">Healthy Food</h1>
      
      <FoodItems items ={foodItems}></FoodItems>
      <ErrorMessage items ={foodItems}></ErrorMessage>
      <Item></Item>
      
    </>
  );
}

export default App;
