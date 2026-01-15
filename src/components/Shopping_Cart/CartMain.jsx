import { useReducer, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { initialState } from "./initialState";
import Cart from "./Cart";
import CartProductList from "./CartProductList";
import rootReducer from "./rootReducer";
import Login from "./Login";
import Button from "../Button/Button";

export default function CartMain() {
  const [state, dispatch] = useReducer(rootReducer, initialState, () => ({
    ...initialState,
    cart: JSON.parse(localStorage.getItem("cartReducer")) || [],
    auth: JSON.parse(localStorage.getItem("authReducer")) || {
      isAuth: false,
      user: null,
    },
  }));

  useEffect(() => {
    localStorage.setItem("cartReducer", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    localStorage.setItem("authReducer", JSON.stringify(state.auth));
  }, [state.auth]);

  const [active, setActive] = useState("products");

  function renderCartLength() {
    if (!state.auth.isAuth) return null;
    if (state.cart.length === 0) return null;
    return ` ${state.cart.reduce((sum, item) => sum + item.qty, 0)}`;
  }

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div>
        <h3>Корзина сделана с помощью ... надо будет дописать))</h3>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <Button
          isActive={active === "products"}
          buttonClick={() => setActive("products")}
        >
          Товары
        </Button>
        <Button
          isActive={active === "cart"}
          buttonClick={() => setActive("cart")}
        >
          Корзина{" "}
          {renderCartLength()}
        </Button>
        <Button
          isActive={active === "login"}
          buttonClick={() => setActive("login")}
        >
          Пользователь
        </Button>
      </div>
      <div>
        {active === "cart" && <Cart />}
        {active === "products" && <CartProductList />}
        {active === "login" && <Login />}
      </div>
    </GlobalContext.Provider>
  );
}
