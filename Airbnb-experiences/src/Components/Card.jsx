import React from "react";
import katie from "../assets/katie.png";
import star from "../assets/star.png";

export default function Card() {
    return (
        <div className="card">
            <img src={katie} alt="katie" className="card-image"/>
                <div className="card-details" >
                    <img src={star} alt="star" className="card-star" />
                    <span>5.0 </span>
                    <span>(6) . </span>
                    <span> USA</span>
                </div>
            <p>Life lessons with Katie Zaferes</p>
            <p> From $136 / person</p>
        </div>
    )
}