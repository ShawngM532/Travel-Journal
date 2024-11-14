import React from "react";
import katie from "../assets/katie.png";
import star from "../assets/star.png";

export default function Card() {
    return (
        <div className="card">
            <img 
                src={katie} 
                className="card-image"
                alt="Main card image"

            />
                <div className="card-details" >
                    <img src={star} alt="star" className="card-star" />
                    <span className="gray">5.0 </span>
                    <span className="gray">(6) . </span>
                    <span> USA</span>
                </div>
            <h2>Life lessons with Katie Zaferes</h2>
            <p> <span className="bold">From $136</span> / person</p>
        </div>
    )
}