import React from "react";

function MyFoodTriggers({addNewFood, name, chemicals, triggers ,setTriggers, handleDelete, id}){
    function deleteTrigger(e){
        e.preventDefault()
        fetch(`http://localhost:3000/triggers/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type":"application/json"
            }
    })
            .then(res=>res.json())
            .then(() => handleDelete(id))
    }
    return(
        <div>
         <p>
             {name +" "}
             {"(" + chemicals + ")"}
             <button onClick={deleteTrigger} className="delete" type="button">Delete</button>
          </p>
        </div>
          
    )
}
export default MyFoodTriggers;