import React from "react";
import arrow from "../image/arrow.svg"

export default function Card(props) {
    return(
        <div className="card" id={props.id}>
            <div className="wrapper--nail">
                <img className="nail" src={props.imageUrl}/>
            </div>
            <div className="card--info">
                <div className="card--location">
                    <img className="arrow" src={arrow}/>
                    <span>{props.location}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h3>{props.title}</h3>
                <div className="card--data">{props.startDate} - {props.endDate}</div>
                <div className="card-description">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}