import React from "react";
import airbnbLogo from "../assets/airbnb-logo.png";

export default function Navbar(){
    return (
        <nav className="Navbar">
            <img src={airbnbLogo} alt="Airbnb logo" />
        </nav>
    )
}