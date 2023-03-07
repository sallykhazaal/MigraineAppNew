import React from "react";
import ChemicalCard from "./ChemicalCard";

function ChemicalCollection() {
  const migraineChemicalsList = [
    { id: 1, name: "Sulfites" },
    { id: 2, name: "Sulfates" },
    { id: 3, name: "Nitrites" },
    { id: 4, name: "Nitrates" },
    { id: 5, name: "Tyramine" },
    { id: 6, name: "Histamine" },
    { id: 7, name: "Caffeine" },
    { id: 8, name: "MSG" },
  ];
  return (
    <ul className="cards">
      {migraineChemicalsList.map((chemical) => {
        return <ChemicalCard key={chemical.id} name={chemical.name} />;
      })}
    </ul>
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
