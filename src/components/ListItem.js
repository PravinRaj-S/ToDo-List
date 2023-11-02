import React from "react";

const ListItem = (props) =>{

    return <li onClick={() => {props.onDelete(props.id)}}>{props.item}</li>
    
}

export default ListItem