import foodsJson from "../../foods.json";
import { useState } from "react";
import FoodBox from "../foodBox/FoodBox";
import AddFoodForm from "../addFoodForm/AddFoodForm";



function Foodlist() {

    const [foods, setFoods] = useState(foodsJson);

    const handleDelete = (id) => {
      const updateFoods = foods.filter((food) => food.id !== id)
      setFoods(updateFoods)
  
    }
    const handleCreate = (food) => {
      
      setFoods([...foods, ({ ...food , id: self.crypto.randomUUID()})])
  
      console.log(foods.map((food) => food.id))
  
    }
  
    return (
      <>
        <div className="App">
          <h1>LAB | React IronNutrition</h1>
        </div>
        <div className="container" >
          <AddFoodForm onCreate={handleCreate} />
          <div className="row">
            {foods.map((food) => { return <FoodBox key={food.id} handleDelete={handleDelete} food={food} /> })}
          </div>
        </div>
      </>
  
    );
    
}
export default Foodlist