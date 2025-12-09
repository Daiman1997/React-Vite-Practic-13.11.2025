import { useEffect, useRef, useState } from "react";
import Button from "./Button/Button";

export default function SaveReference() {
  const inputRef = useRef();
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  renderCount.current += 1;

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <section>
      <div>
        <h2>Фокус на input</h2>
        <input ref={inputRef} className="control" placeholder="Напиши что-то" />
        <Button buttonClick={handleClick} isActive={true}>
          Cфокусировать
        </Button>
      </div>
      <div>
        <h2>Хранение значения между рендерами без перерисовки</h2>
        <p>Счётчик: {count}</p>
        <p>Количество рендеров: {renderCount.current}</p>
        <Button buttonClick={() => setCount((c) => c + 1)} isActive={true}>+1</Button>
      </div>
    </section>
  );
}
