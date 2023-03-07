import React, { useState } from "react";

function ChemicalCard({ migraineChemicalsList }) {
  const [showFront, setShowFront] = useState(true);

  function handleClick() {
    setShowFront((showFront) => !showFront);
  }

  return (
    <ChemicalCard>
      {/* <div onClick={handleClick}>
        <div className="image">
          <img src={showFront ? sprites.front : sprites.back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
      </div> */}
    </ChemicalCard>
  );
}

export default ChemicalCard;
