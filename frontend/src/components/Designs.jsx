// import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import Dress from "../assets/images/dress.jpg";
import Blouse from "../assets/images/blouse.jpg";
import Gown from "../assets/images/gown.jpg";
import Kurti from "../assets/images/kurti.jpg";
import "../css/design.css";
const Designs = () => {
  return (
    <div id="design">
      <h1 className="des_h1">Some Trending Designs</h1>
      <div className="photos" data-aos="fade-in">
        <div className="Blouses">
          <h2>Blouses</h2>
          <img
            className="single_ph"
            src={Blouse}
            alt="blouse"
            // onClick={() => {
            //   // window.location.href = "https://tirupatitailors.ml/blouses";
            // }}
          ></img>
          <NavLink className="link" to="/blouses">
            <button className="btn">More Designs</button>
          </NavLink>
        </div>
        <div className="Dresses">
          <h2>Dresses</h2>
          <img
            className="single_ph"
            src={Dress}
            alt="dress"
            // onClick={() => {
            //   window.location.href = "https://tirupatitailors.ml/dresses";
            // }}
          ></img>
          <NavLink className="link" to="/dresses">
            <button className="btn">More Designs</button>
          </NavLink>
        </div>
        <div className="Kurtis">
          <h2>Kurtis</h2>
          <img
            className="single_ph"
            src={Kurti}
            alt="kurti"
            // onClick={() => {
            //   window.location.href = "https://tirupatitailors.ml/kurtis";
            // }}
          ></img>
          <NavLink className="link" to="/kurtis">
            <button className="btn">More Designs</button>
          </NavLink>
        </div>
        <div className="Gowns">
          <h2>Gowns</h2>
          <img
            className="single_ph"
            src={Gown}
            alt="gown"
            // onClick={() => {
            //   window.location.href = "https://tirupatitailors.ml/gowns";
            // }}
          ></img>
          <NavLink className="link" to="/gowns">
            <button className="btn">More Designs</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Designs;
