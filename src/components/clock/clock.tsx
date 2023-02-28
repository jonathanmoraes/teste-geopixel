import { useState, useEffect } from "react";
import "./clock.css";

//função que retorna um relogio virtual
function Clock() {
  const [hour, setHour] = useState(new Date());
  //useEffect responsavel por rodar e atulaizar o estado a cada 1 segundo
  useEffect(() => {
    //setInterval responsavel por forçar a atualização do estado
    const interval = setInterval(() => {
      setHour(formatTime(new Date()));
    }, 1000);
    return () => {
      //responsavel para evitar o estouro de memoria, limpnado a constante a cada rodagem
      clearInterval(interval);
    };
  }, []);
  //função pra ajustar o formato da hora,minutos e seguntos no formato '00'
  function formatTime(time: any) {
    return time < 10 ? "0" + time : time;
  }

  return (
    <div>
      <span className="hour">{formatTime(hour.getHours())}</span>
      <span>:</span>
      <span className="min">{formatTime(hour.getMinutes())}</span>
      <span>:</span>
      <span className="sec">{formatTime(hour.getSeconds())}</span>
    </div>
  );
}

export default Clock;
