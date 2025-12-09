import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from "../Button/Button";

export default function Cart() {
  const { cart, addToCart, decreaseQty, removeFromCart } =
    useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <section>
      <h2>Корзина</h2>

      {cart.length === 0 && <p>Корзина пуста</p>}

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          {item.name} - {item.price} грн x {item.qty}
          <Button
            className="margin-left"
            isActive={true}
            buttonClick={() => addToCart(item)}
          >
            +
          </Button>
          <Button isActive={true} buttonClick={() => decreaseQty(item.id)}>
            -
          </Button>
          <Button isActive={true} buttonClick={() => removeFromCart(item.id)}>
            Удалить
          </Button>
        </div>
      ))}
      {cart.length > 0 && <p>Общая сумма: {totalPrice} грн</p>}
    </section>
  );
}
