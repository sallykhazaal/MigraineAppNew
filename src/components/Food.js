import React from "react";
import {List} from 'semantic-ui-react'

function Food({name, chemicals}){
    return(
        <List animated verticalAlign='middle'>
         <List.Item>
          <List.Content>
            <List.Header>{name}</List.Header>
            <List.Description>{chemicals}</List.Description>
          </List.Content>
        </List.Item>
      </List>         
    )
}
export default Food;