import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import Button from "../Button/Button";

export default function Login() {
  const { state, dispatch } = useContext(GlobalContext);

  const login = () => {
    dispatch({
      type: "LOGIN",
      payload: { name: "User", email: "user@example.com" },
    });
  };

  return (
    <section>
      <h2>Пользователь</h2>
      {!state.auth.isAuth && <p>Пользователь не вошел</p>}
      {state.auth.isAuth && (
        <div>
          <p>Имя: {state.auth.user.name}</p>
          <p>Email: {state.auth.user.email}</p>
        </div>
      )}
      <Button isActive={!state.auth.isAuth} buttonClick={login}>
        Войти
      </Button>
      <Button
        isActive={state.auth.isAuth}
        buttonClick={() => dispatch({ type: "LOGOUT" })}
      >
        Выйти
      </Button>
    </section>
  );
}
