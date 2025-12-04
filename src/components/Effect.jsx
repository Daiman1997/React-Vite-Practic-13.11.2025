import { useState, useEffect, } from "react";
import Button from "./Button/Button";

export default function Effect() {

    const [second, setSecond] = useState(0);
    const [secondArray, setSecondArray] = useState([]);

    const handleSave = () => {
        setSecondArray((arr) => [...arr, second]);
        setSecond(0)
    }

    useEffect(() => {
        const id = setInterval(() => {
            setSecond((s) => s + 1);
        }, 1000)

        return () => clearInterval(id);
    }, [])

return (
    <section>
        <h3>Таймер</h3>
        <p>Прошло {second}</p>
        <Button buttonClick={handleSave}>Сбросить</Button> 
        <ul>
            {secondArray.map((sec, index) => {
                return <li key={index}>Прошло {sec} секунд</li>
            })}
        </ul>
    </section>
);
}