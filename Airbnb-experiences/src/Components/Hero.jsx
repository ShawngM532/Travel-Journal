import React from "react";
import heroimage from "../assets/the-experiences.png";

export default function Hero() {
    return (
        <section>
            <div className="image-container">
             <img src={heroimage} alt="hero image" className="heroimage"/>
            </div>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join Unique interactive activities led by one of a kind hosts without ever leaving home</p>
        </section>
    )
}