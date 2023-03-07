import React from "react";

function MyFoodTriggers({addNewFood, name, chemicals}){
    return(
        
         <p>
             {name +" "}
             {"(" + chemicals + ")"}
          </p>
          
    )
}
export default MyFoodTriggers;