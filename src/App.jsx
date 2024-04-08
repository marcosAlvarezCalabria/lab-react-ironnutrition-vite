import foodsJson from "./foods.json";
import "./App.css";
import { useState } from "react";
import FoodBox from "./components/foodBox/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const handleDelete = (id)=>{
   const updateFoods = foods.filter((food) => food.id !== id )
   setFoods(updateFoods)

  }

  return (
    <>
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
    </div>
    {
      foods.map((food) => {
        return <FoodBox  key={food.id} handleDelete={handleDelete} food={food}/>
        
      })
    }
  
    
    </>

  );
}

export default App;
