import foodsJson from "./foods.json";
import "./App.css";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
    </div>
  );
}

export default App;
