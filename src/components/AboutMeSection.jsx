import Button from "./Button/Button";
import { useState } from "react";

export default function AboutMeSection() {
  
  function handleNameChange(event) {
    setName(event.target.value);
    setHasError(event.target.value.trim().length < 2);  
  }

  const [name, setName] = useState("");
  const [gender, setGender] = useState("other");
  const [hasError, setHasError] = useState(false);

  return (
    <section>
      <h3>Обо мне</h3>

      <form action="">
        <label htmlFor="name">Мое имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={name}
          style={{
            border: hasError ? "2px solid red" : null ,
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="gender">Пол</label>
        <select name="gender" id="gender" className="control" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
          <option value="other">Другой</option>
        </select>
        
    <pre>
        Name: {name}
        <br />
        Gender: {gender}
    </pre>

        <Button disabled={hasError} isActive={!hasError}>Отправить</Button>
      </form>
    </section>
  );
}
