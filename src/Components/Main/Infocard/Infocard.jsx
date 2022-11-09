import React from "react";
import './Infocard.css'


export const Infocard =({image,txt1,txt2})=>{
    return(
        <div className="Infocard">
            <img src={image} alt="info-img"/>
            <div className="info-text">
                <h4>{txt1}</h4>
                <p>{txt2}</p>
            </div>
            {/* <i className="fa-thin fa-ellisis-stroke"></i> */}
        </div>
    )
}