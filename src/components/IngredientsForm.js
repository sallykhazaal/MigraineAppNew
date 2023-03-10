import React, { useState, useEffect } from "react";

function IngredientsForm({}) {
  const [foods, setFoods] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [formIngredients, setFormIngredients] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/foods")
      .then((res) => res.json())
      .then((foods) => setFoods(foods));
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/ingredients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: formIngredients,
      }),
    })
      .then((res) => res.json())
      .then((newIngredients) => {
        setIngredients([...ingredients, newIngredients]);
        const ingreds = newIngredients.text.split(", ");
        for (let i = 0; i < foods.length; i++) {
          const listedFoods = foods[i].name.split(", ");
          console.log(listedFoods, ingreds);
          if (listedFoods.includes(ingreds)) {
            console.log(`${listedFoods} has these ingredients: ${ingreds}`);
            break;
          } else {
            console.log("ingredienets not found");
          }
        }
      });
  };

  useEffect(() => {
    fetch("http://localhost:3000/ingredients")
      .then((res) => res.json())
      .then((ingredients) => setIngredients(ingredients));
  }, []);

  return (
    <>
      <h3 className="ingredients-checker">
        Paste Your Ingredients List and We Will Check if the List Contains Any
        Migraine Triggering Ingredients in it.
      </h3>
      <form onSubmit={handleFormSubmit}>
        <input
          ingredients={ingredients}
          value={formIngredients}
          onChange={(e) => setFormIngredients(e.target.value)}
        />
        <button>Submit</button>
      </form>
      {/* <ul>{ingredients.map(ingredient) => (<IngredientList />))}</ul> */}
    </>
  );
}
export default IngredientsForm;

