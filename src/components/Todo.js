import React from "react";

const Todo = () =>{

    return (
        <div className="container todo-main d-flex justify-content-center align-items-center">
            <div className="todo-container">
            <div className="input-group mb-3 my-4">
                <input type="text" className="form-control" placeholder="Enter an Item" />
                <button className="btn btn-primary text-white btn-outline-secondary" type="button">Add Item</button>
            </div>
            </div>
        </div>
    )
}

export default Todo