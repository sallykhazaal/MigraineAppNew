import React, { useState } from "react";
import {Card} from "semantic-ui-react"

function ChemicalCard({ name, image, food }) {
  const [showFront, setShowFront] = useState(true);
    function handleClick() {
    setShowFront((showFront) => !showFront);
    console.log(handleClick)
  }

  return (    
<Card onClick={handleClick}
    image={showFront ? image : ""}
    header={showFront ? name : ""}
    meta={showFront ? "" : name}
    description={showFront ? "" : food}
  />
  );
}
export default ChemicalCard;
