// Code PasswordInput Component Here
import React from "react";

function PasswordInput() {
    function handleChange() {
        console.log("Entering password...");
    }

    return (
        <input type="password" onChange={handleChange} />
    );
}

export default PasswordInput;