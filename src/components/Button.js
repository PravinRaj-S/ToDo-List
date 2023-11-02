import React from "react";

const Button = (props) =>{
    return (
        <button type={props.type ? props.type : "button"} className={props.className ? props.className : "btn btn-primary"}>{props.label ? props.label : ""}</button>
    );
}

export default Button