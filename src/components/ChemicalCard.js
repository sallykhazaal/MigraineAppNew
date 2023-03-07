import React, { useState } from "react";
import {Card} from "semantic-ui-react"

function ChemicalCard({ name, image, food }) {
  const [showFront, setShowFront] = useState(true);

  function handleClick() {
    setShowFront((showFront) => !showFront);
  }

  return (    
<Card
    image={image}
    header={name}
    meta={food}
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
  />

  );
}

export default ChemicalCard;
