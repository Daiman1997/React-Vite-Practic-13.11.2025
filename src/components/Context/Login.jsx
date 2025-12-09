import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Button from "../Button/Button";

export default function Login() {
  const { user, setUser } = useContext(AuthContext);

  function handleLogin() {
    setUser({
      name: "Maksim",
      id: 1,
    });
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <section style={{margin:"20px"}}>
        <h2>Авторизация пользователя с помощью useContext</h2>
        {user ? (
            <>
                <h2>Привет, {user.name}!</h2>
                <Button isActive={user} buttonClick={handleLogout}>Выйти</Button>
            </>
        ) : (
            <Button className='margin' isActive={!user} buttonClick={handleLogin}>
                Войти
            </Button>
        )}
    </section>
  );
}
