import { SyntheticEvent, useState } from "react";
import "./shy-ball.css";

function ShyBall() {
  function changePosition(event: SyntheticEvent) {
    const target = event.target as HTMLInputElement;
    const x = `${Math.floor(Math.random() * 45 + 1)}vw`;
    const y = `${Math.floor(Math.random() * 45 + 1)}vh`;
    target.style.top = x;
    target.style.left = y;
  }

  return (
    <div className="shyBall">
      <div className="ball" onMouseEnter={changePosition}></div>
    </div>
  );
}

export default ShyBall;
