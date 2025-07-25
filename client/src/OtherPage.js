import React from "react";
import  { Link } from "react-router-dom";

export default () => {
    return (
        <div>
            <h2>Other Page</h2>
            <Link to="/">Go back to Home</Link>
        </div>
    );  
};