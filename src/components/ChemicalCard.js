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
    meta={showFront ? "" : food}
    description={showFront ? "" : 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'}
  />

  );
}

export default ChemicalCard;
