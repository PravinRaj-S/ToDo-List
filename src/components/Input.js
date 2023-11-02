import React from "react";

const Input = (props) =>{
    return (
        <input 

        type={props.type ? props.type : "text"}  
        className="form-control input" 
        id={props.jsId ? props.jsId : ""}  
        placeholder={props.placeholder ? props.placeholder : ""}
        value={props.value ? props.value : ""}

        />
    )
}

export default Input