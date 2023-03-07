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
  <Card.Group columns={3} divided>
        { <ul className="cards">
            {chemicals.map((chemical) => {
             return <ChemicalCard key={chemical.id} name={chemical.name} image={chemical.image} food={chemical.foods}/>;
           })}
        </ul>}
      </Card.Group> 
  );
}

export default ChemicalCollection;

// const chemicalCards = migraineChemicalsList.map((chemical) => (
//   <ChemicalCard
//     migraineChemicalsList={migraineChemicalsList}
//     key={chemical.id}
//     name={chemical.name}
//   />
// ));
// return <></>;
