import { useState, useEffect } from "react";
import "./clock.css";

function Clock() {
  const [hour, setHour] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setHour(formatTime(new Date()));
    }, 1000);
    return () => {
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
