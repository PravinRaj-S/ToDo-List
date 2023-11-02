import React, { useState } from "react";
import Listitem from './components/ListItem';


const App = () =>{

    const [newItem, setNewItem] = useState("")
    const [Items, setItems] = useState([])


    const handleChange = (e) =>{
        var {value} = e.target;
        setNewItem(value)
    }

    const addItem = () =>{
        setItems(
            [...Items, newItem]
        )
        setNewItem("")
    }

    const deleteItem = (id) =>{
        setItems(prevItems => {
            return prevItems.filter(
                (item, index)=>{
                    return index !== id
                }
            )
            
        })
    }
    
    return (
        <div className="container">
            <div className="todo-list">
                <header className="m-3 p-3 text-center">
                    <h3>Todo List</h3>
                </header>
                <div className="input-group mb-3">
                    <input value={newItem} onChange={handleChange} type="text" className="form-control input" placeholder="Enter an Item" />
                    <button onClick={addItem} className="btn btn-outline-secondary button" type="button" >Add</button>
                </div>
                <div className="list">
                    <ul>
                        {Items.map((item, index) => <Listitem key={index} id={index} item={item} onDelete = {deleteItem}/>)}
                    </ul>
                </div>
            </div>
        </div>
    )
  
}

export default App