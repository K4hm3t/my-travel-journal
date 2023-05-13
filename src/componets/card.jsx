import React from "react";

export default function Card(props) {
    return(
        <div className="card">
            <img src={`src/images/${props.item.img}`} className="card--img"/>
            <div className="card--info">
                <div className="card--coordinates">
                    <img src="src/images/location-icon.png" className="card--locicon"/>
                    <h3 className="card--location">{props.item.location.toUpperCase()}</h3>
                    <p className="card--link"><a href={`${props.item.link}`} target="_blank" className="linkLetters">View on Google Maps</a></p>
                </div>
                <h2 className="card--title">{props.item.title}</h2>
                <p className="card--date">{props.item.dateStart} - {props.item.dateEnd}</p>
                <p className="card--desc">{props.item.description}</p>
            </div>

        </div>
    )
}
