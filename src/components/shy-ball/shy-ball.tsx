import { SyntheticEvent, useState } from "react";
import "./shy-ball.css";

//componete que retorna a bola Timida
function ShyBall() {
  //Função que altera a posição do componente 
  function changePosition(event: SyntheticEvent) {
    //pega target atual do objeto e atribui a uma constante.
    const target = event.target as HTMLInputElement;
    //define uma nova posição de forma aleatoria
    const x = `${Math.floor(Math.random() * 45 + 1)}vw`;
    const y = `${Math.floor(Math.random() * 100 + 1)}vh`;
    //altera o top e o left do objeto para que haja uma mudança de posição
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
