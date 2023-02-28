import { useState } from "react";
import Clock from "../../components/clock/clock";
import ShyBall from "../../components/shy-ball/shy-ball";
import ItemPicker from "../../components/item-picker/item-picker";
import "./style.css";

function Home() {
  return (
    <div className="container">
      <div className="left-side">
        <div className="clock"><Clock/></div>

        <div className="item-picker"><ItemPicker/></div>
      </div>

      <div className="right-side">
        <ShyBall/>
      </div>
    </div>
  );
}

export default Home;
