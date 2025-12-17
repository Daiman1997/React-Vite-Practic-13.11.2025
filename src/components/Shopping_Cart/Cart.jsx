import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from "../Button/Button";

export default function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <section>
      <h2>Корзина {cart.length > 0 ? `${cart.reduce((sum, item) => sum + item.qty, 0)}` : null}</h2>

      {cart.length === 0 && <p>Корзина пуста</p>}

      {cart.map((item) => (
        <div key={item.id}>
          {item.name} - {item.price} грн х {item.qty}
          <Button
            buttonClick={() => {
              dispatch({ type: "ADD_ITEM", payload: item });
            }}
          >
            +
          </Button>
          <Button
            buttonClick={() => {
              dispatch({ type: "DECREASE_ITEM", payload: item.id });
            }}
          >
            -
          </Button>
          <Button
            buttonClick={() => {
              dispatch({ type: "REMOVE_ITEM", payload: item.id });
            }}
          >
            Удалить
          </Button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <p>Общая сумма: {total} грн</p>
          <Button
            buttonClick={() => {
              dispatch({ type: "CLEAR_CART" });
            }}
          >
            Очистить корзину
          </Button>
        </>
      )}
    </section>
  );
}
