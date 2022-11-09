import React from "react";
import { Infocard } from "./Infocard/Infocard";
import "./Main.css";
import Sidebar from "./Sidebar/Sidebar";
import Barchart from "./Graph/Barchart";
import Piechart from "./Graph/Piechart";
import Bed from "../bed.png";
import Book from "../book.png";
import Car from "../car.png";
import User from "../user.png";
import First from "./Graph/Footer/Fisrt";
import Second from "./Graph/Footer/Second";
import Third from "./Graph/Footer/Third";

export const Main = () => {
  return (
    <div className="main">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="main-right">
        <div className="info-card">
          <Infocard image={Bed} txt1={"3,256"} txt2={"Total Patients"} />
          <Infocard image={User} txt1={"394"} txt2={"Available staff"} />
          <Infocard image={Book} txt1={"$2,536"} txt2={"Avg Treat Costs"} />
          <Infocard image={Car} txt1={"38"} txt2={"Available Cars"} />
        </div>

        <div className="graph-mid">
          <div className="chart1">
            <div className="barchart">
              <Barchart />
            </div>
            <div className="piechart">
              <Piechart />
            </div>
          </div>

          <div className="piechart2">
            <Piechart />
          </div>
        </div>

        <div className="footer">
          <div className="f-first">
            <First />
          </div>
          <div className="f-second">
            <Second />
          </div>
          <div className="f-third">
            <Third />
          </div>
        </div>
      </div>
    </div>
  );
};
