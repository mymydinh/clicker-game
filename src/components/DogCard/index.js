import React from "react";
import "./style.css";
import Image from "react-bootstrap/Image";

function DogCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <Image alt="Dog finder" 
                onClick={() => props.handleSelection(props.id)} className={props.name} src={props.image} rounded />
            </div>
        </div>
    )
}

export default DogCard;
