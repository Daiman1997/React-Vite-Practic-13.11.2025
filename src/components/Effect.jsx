import { useState, useEffect, useRef } from "react";
import Button from "./Button/Button";

export default function Effect() {
  const [second, setSecond] = useState(0);
  const [secondArray, setSecondArray] = useState([]);

  const handleSave = () => {
    setSecondArray((arr) => [...arr, second]);
    setSecond(0);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setSecond((s) => s + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  // Новый таймер с паузой и сбросом

  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (!isActive) return

    intervalRef.current = setInterval(() => {
        setSeconds((s) => s + 1)
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, [isActive])

  return (
    <section>
      <div>
        <h3>Таймер</h3>
        <p>Прошло {second}</p>
        <Button buttonClick={handleSave}>Сбросить</Button>
        <ul>
          {secondArray.map((sec, index) => {
            return <li key={index}>Прошло {sec} секунд</li>;
          })}
        </ul>
      </div>
      <div>
        <h3>Таймер с паузой</h3>
        <p>⏱ {seconds} sec</p>
        <Button buttonClick={() => setIsActive(true)}>Start</Button>
        <Button buttonClick={() => setIsActive(false)}>Pause</Button>
        <Button buttonClick={() => setSeconds(0)}>Reset</Button>
      </div>
    </section>
  );
}
