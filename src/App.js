import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todo from "./components/Todo";

const App = () =>{
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <>
            <Header />
            <Todo />
        </>
        
    );
}

export default App