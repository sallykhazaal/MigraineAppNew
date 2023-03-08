import React, { useEffect, useState } from "react";
import Food from "./Food";
import FoodForm from "./FoodForm";
import MyFoodTriggers from "./MyFoodTriggers";


function Search({ search, setSearch, food, setFood }) {
  const[newFoods, setNewFoods]=useState([])
  const[triggers,setTriggers]=useState([])
  function handleSearch(e){
    setSearch(e.target.value)
  }
useEffect(()=>{
  fetch("http://localhost:3000/foods")
  .then(res=>res.json())
  .then(data=>setFood(data))
},[])

useEffect(()=>{
  fetch("http://localhost:3000/triggers")
  .then(res=>res.json())
  .then(triggers=>setTriggers(triggers))
},[])

function addNewFood(newFoods){
  setTriggers([...triggers, newFoods]) //we could set a new state for special foods and add it there
}
function handleDelete(id){
    setTriggers(triggers.filter((t) => t.id !== id))
}

const foodToDisplay = food.filter(foods => foods.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
      <FoodForm addNewFood={addNewFood} newFoods={newFoods} setNewFoods={setNewFoods}/>
      <div className="searchbar">
        <label htmlFor="search">Search Food Ingredients:</label>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          onChange={handleSearch}
          value={search}
        />
      </div>
      <div className="foods">
      <h2>Food and Ingredients Containing Known Potential Migraine Triggers</h2>
      {foodToDisplay.map(foods=>{
        return <Food key={foods.id} name={foods.name} chemicals={foods.chemicals}/>
      })}
      </div>
      <div className="triggers">
      <h2>My Food Triggers!</h2>
        {triggers.map(foodz=>{
        return <MyFoodTriggers key={foodz.id} id={foodz.id} handleDelete={handleDelete} setTriggers={setTriggers} triggers={triggers} addNewFood={addNewFood} name={foodz.name} chemicals={foodz.chemicals} />
        })}
      </div>
    </>
  );
}

export default Search;
