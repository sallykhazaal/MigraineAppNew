import React, { useEffect, useState } from "react";
import Food from "./Food";
import FoodForm from "./FoodForm";
import MyFoodTriggers from "./MyFoodTriggers";


function Search({ search, setSearch, food, setFood }) {
  const[newFoods, setNewFoods]=useState([])
  function handleSearch(e){
    setSearch(e.target.value)
  }
useEffect(()=>{
  fetch("http://localhost:3000/foods")
  .then(res=>res.json())
  .then(data=>setFood(data))
},[])

function addNewFood(newFoods){
  setNewFoods(newFoods) //we could set a new state for special foods and add it there
}

const foodToDisplay = food.filter(foods => foods.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
      <h1>Food and Ingredients Containing Known Potential Migraine Triggers</h1>
      <FoodForm addNewFood={addNewFood} newFoods={newFoods} setNewFoods={setNewFoods}/>
      <div className="searchbar">
        <label htmlFor="search">Search Food:</label>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          onChange={handleSearch}
          value={search}
        />
      </div>
      {foodToDisplay.map(foods=>{
        return <Food key={foods.id} name={foods.name} chemicals={foods.chemicals}/>
      })}
      <h3>Food Triggers!</h3>
      <div name="triggers">
        <MyFoodTriggers addNewFood={addNewFood} name={newFoods.name} chemicals={newFoods.chemicals} />
      </div>
    </>
  );
}

export default Search;
