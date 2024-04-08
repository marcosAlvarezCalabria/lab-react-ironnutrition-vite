import ("./FoodBox.css")
function FoodBox({ food }) {
    return (


        <div className="col-md-3 mb-4">
            <div className="card">
                <h3 className="card-title">{food.name}</h3>
                <img src={food.image} className="card-img-top img-thumbnail" alt="Food"  />
                <div className="card-body">

                    <p className="card-text">Calories: {food.calories}</p>
                    <p className="card-text">Serving: {food.servings}</p>
                    <h3 className="card-text">Total Calories : {food.calories} kcal</h3>
                    <button className="btn btn-primary">Delete</button>
                </div>
            </div>
            <hr />
        </div>
        
    )
}

export default FoodBox