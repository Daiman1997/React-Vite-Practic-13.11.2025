import Button from "./Button/Button.jsx";
import { differences } from "../data.js";
import { useState } from "react";

export default function ButtonSection() {
    const [contentType, setContentType] = useState(null);

    function handleClick(type) {
        setContentType(type);
    }
    
    return (
        <section>
            <Button
              isActive={contentType === "way"}
              buttonClick={() => handleClick("way")}
            >
              Knopa 1
            </Button>
            <Button
              isActive={contentType === "easy"}
              buttonClick={() => handleClick("easy")}
            >
              Knopa 2
            </Button>
            <Button
              isActive={contentType === "program"}
              buttonClick={() => handleClick("program")}
            >
              Knopa 3
            </Button>
            {contentType ? (
              <p>{differences[contentType]}</p>
            ) : (
              <p>Нажми на кнопку!!!</p>
            )}
          </section>
    )
}