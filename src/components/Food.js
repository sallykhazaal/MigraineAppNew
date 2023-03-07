import React from "react";

function Food({name, chemicals}){
    return(
        
         <p>
             {name +" "}
             {"(" + chemicals + ")"}
          </p>
          
    )
}
export default Food;