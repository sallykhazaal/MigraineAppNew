import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import ChemicalCollection from "./components/ChemicalCollection";
import IngredientsForm from "./components/IngredientsForm";
import Footer from "./components/Footer";


function App() {
  const[foods,setFood]=useState([])
  const[chemicals,setChemicals]=useState([])
  const [search, setSearch] = useState("");
  const foodsToDisplay = foods.filter((food) =>
    food.name.includes(search)
  );
  return (
    <div>
      <nav className="navBar">
        <Link className="link" to="/">Chemical Collection</Link>
        <Link className="link" to="/search">Searchable Food List</Link>
        <Link className="link" to="/reader">Ingredients Form</Link>
      </nav>
      <div className="buffer"></div>
      <Switch>
        <Route exact path="/">
          <ChemicalCollection className = "chemBody" chemicals={chemicals} setChemicals={setChemicals} />
        </Route>
        <Route path="/search">
          <Search
            search={search}
            setSearch={setSearch}
            food={foods}
            setFood={setFood}
          />
        </Route>
        <Route path="/reader">
          <IngredientsForm food={foods} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
