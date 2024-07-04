import React from "react";
import Asso from "../assets/Asso.png";
import telAsso from "../assets/telAsso.png";
import carteAsso from "../assets/carteAsso.png";
import "./Help.css";

export default function Help() {
  return (
    <div className="helpContainer">
      <img className="helpAss" src={Asso} />
      <img className="helpAss" src={telAsso} />{" "}
      <img className="helpAss" src={carteAsso} />
    </div>
  );
}
