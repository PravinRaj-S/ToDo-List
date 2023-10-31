import React from "react";

const Footer = (props) =>{
    return (
        
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 w-100 d-flex align-items-center justify-content-center">
            <span className="text-muted">© {props.year} Program-Doc</span>
            </div>
        </footer>
        
    )
}

export default Footer