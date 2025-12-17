import { useReducer, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import Cart from "./Cart";
import ProductList from "./CartProductList";
import cartReducer, { initialState } from "./cartReducer";
import Button from "../Button/Button";

export default function CartMain() {
  const [cart, dispatch] = useReducer(
    cartReducer,
    initialState,
    () => JSON.parse(localStorage.getItem("cartReducer")) || initialState
  );

  useEffect(() => {
    localStorage.setItem("cartReducer", JSON.stringify(cart));
  }, [cart]);

  const [active, setActive] = useState("products");

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      <div style={{ marginTop: "20px", display: "flex", gap: "10px", justifyContent: "center" }}>
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
          {cart.length > 0
            ? `${cart.reduce((sum, item) => sum + item.qty, 0)}`
            : null}
        </Button>
      </div>
      <div>{active === "cart" ? <Cart /> : <ProductList />}</div>
    </CartContext.Provider>
  );
}
