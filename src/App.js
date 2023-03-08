import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import ChemicalCollection from "./components/ChemicalCollection";
import LabelReader from "./components/LabelReader";
import Footer from "./Footer";


function App() {
  const[food,setFood]=useState([])
  const[chemicals,setChemicals]=useState([])
  const [search, setSearch] = useState("");
  const foodsToDisplay = food.filter((food) =>
    food.name.includes(search)
  );
  return (
    <div>
      <nav className="navBar">
        <Link to="/">Chemical Collection</Link>
        <Link to="/search">Searchable Food List</Link>
        <Link to="/reader">Label Reader</Link>
      </nav>
      <div className="buffer"></div>
      <Switch>
        <Route exact path="/">
          <ChemicalCollection chemicals={chemicals} setChemicals={setChemicals} />
        </Route>
        <Route path="/search">
          <Search
            search={search}
            setSearch={setSearch}
            food={food}
            setFood={setFood}
          />
        </Route>
        <Route path="/reader">
          <LabelReader food={food} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
