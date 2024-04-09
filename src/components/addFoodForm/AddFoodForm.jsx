import { useState } from "react";

const initialFoodState = {
    name: "",
    calories: 0,
    image: "",
    servings: 0

}

function AddFoodForm({onCreate}) {
    const [food, setFood] = useState({initialFoodState});




    const handleChange = (event) =>{
        const { name, value }= event.currentTarget
        setFood({
            ...food,
            [name]: value
        })
        console.log(value)
    }

    const handleSubmit= (event) => {
        event.preventDefault();
        onCreate(food)
        setFood(initialFoodState)
       

    }
    return (
        <div  className="row justify-content-center">
            <form onSubmit={handleSubmit} className="col-md-8">
                <div className="form-group">
                    <label>Name </label>
                    <input type="text" name="name" onChange={handleChange} value={food.name} className="form-control" placeholder="Name"></input>
                </div>
                <div className="form-group">
                    <label>Image </label>
                    <input type="text" name="image" onChange={handleChange} value={food.image} className="form-control" placeholder="Image"></input>
                </div>
                <div className="form-group ">
                    <label>Calories </label>
                    <input type="number" onChange={handleChange} name="calories" value={food.calories} className="form-control" placeholder="Number"></input>
                </div>
                <div className="form-group ">
                    <label>Servings </label>
                    <input type="number" name="servings" onChange={handleChange} value={food.servings} className="form-control" placeholder="Servings"></input>
                </div>
                    <button >create</button>
                
            </form>
        </div>
    )
}
export default AddFoodForm