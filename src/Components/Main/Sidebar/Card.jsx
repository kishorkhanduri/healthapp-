import React from "react";
import playstore from '../../playstore.png'
import apple from '../../apple.png'
import "./Card.css";


export const Card = () => {
  return (
    <div className="card">
      <h2>Get mobile app</h2>

      <div className="btn">
        <div className="img1">
          <a href="">
            <img src={playstore} alt="" />
          </a>
        </div>
        <div className="img2">
          <a href="">
            <img src={apple} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
