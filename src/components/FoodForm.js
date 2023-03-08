import React, { useState } from "react";
import {Form} from "semantic-ui-react"

function FoodForm({addNewFood, setNewFoods, newFoods}){
    const[formName,setFormName]=useState("")
  const[formChemicals, setFormChemicals]=useState("")
  
  function handleSubmit(e){
    e.preventDefault()
    const newFoods = {
      name: formName,
      chemicals: formChemicals,
    }
    fetch("http://localhost:3000/triggers",{
      method:"POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newFoods)
    })
    .then(res=>res.json())
    .then(data=>addNewFood(data))
     setFormName("")
     setFormChemicals("")
  }



    return(
        <>
        <h3>My Food Triggers</h3>
        <Form
          onSubmit={handleSubmit}
        >
          <Form.Group widths="equal">
            <Form.Input onChange={(e)=>setFormName(e.target.value)} fluid label="Name" placeholder="Name" name="name" value={formName} />
            <Form.Input onChange={(e)=>setFormChemicals(e.target.value)}fluid label="Chemical" placeholder="Chemical" name="hp" value={formChemicals} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
        </>
    )
}

export default FoodForm;