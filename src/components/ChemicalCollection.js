import React, { useEffect } from "react";
import ChemicalCard from "./ChemicalCard";
import {Card, Group} from "semantic-ui-react"

function ChemicalCollection({chemicals, setChemicals}) {
  useEffect(()=>{
    fetch("http://localhost:3000/chemicals")
    .then(res=>res.json())
    .then(data=>setChemicals(data)) 
  },[])
  return (
    <div>
    <h3 className="chem-card-header">Click on Each Card for more Information</h3>
  <Card.Group >
        { <ul className="cards">
            {chemicals.map((chemical) => {
             return <ChemicalCard className="cardz" key={chemical.id} name={chemical.name} image={chemical.image} food={chemical.foods}/>;
           })}
        </ul>}
      </Card.Group> 
      </div>
  );
}
export default ChemicalCollection;
