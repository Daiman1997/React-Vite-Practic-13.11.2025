import { useState } from "react";
import Button from "./Button/Button";

export default function States() {
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [user, setUser] = useState({ name: "", age: 0 });
  const [userList, setUserList] = useState(users);
  const [newUser, setNewUser] = useState("");
  const [newAge, setNewAge] = useState("");

  const addUser = () => {
    if (newUser.trim() === "" || newAge.trim() === "") return;
    setUserList([
      ...userList,
      { id: Date.now(), name: newUser, age: Number(newAge) },
    ]);
    setNewUser("");
    setNewAge("");
  };
  
  return (
    <section>
      <div>
        <h3>Состояния</h3>
        <p>Здесь будет информация о состояниях в React.</p>
      </div>
      <div>
        <h4>Использование UseState с числами</h4>
        <p>Текущее значение: {count}</p>
        <Button buttonClick={() => setCount(count + 1)} isActive={!count}>
          Увеличить значение
        </Button>
        <Button buttonClick={() => setCount(count - 1)} isActive={count}>
          Уменьшить значение
        </Button>
      </div>
      <div>
        <h4>Использование UseState с строками</h4>
        <p>Текст из input : {text}</p>
        <input
          className="control"
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h4>Использование UseState с объектами</h4>
        <p>Имя: {user.name}</p>
        <p>Возраст: {user.age}</p>
        <input
          className="control"
          type="text"
          placeholder="Имя"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          className="control"
          type="number"
          placeholder="Возраст"
          onChange={(e) => setUser({ ...user, age: Number(e.target.value) })}
        />
      </div>
      <div>
        <h4>Использование UseState с массивами</h4>
        <p>Имя</p>
        <input
          className="control"
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <p>Возраст</p>
        <input className="control" type="number" value={newAge} onChange={(e) => setNewAge(e.target.value)}/>
        <Button buttonClick={addUser}>Добавить</Button>
        <ul>
          {userList.map((user) => (
            <li key={user.id}>
              {user.name}, {user.age} лет
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
