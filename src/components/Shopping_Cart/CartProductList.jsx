import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import Button from "../Button/Button";

export default function CartProductList() {
  const { state, dispatch } = useContext(GlobalContext);
  const products = [
    { id: 1, name: "Товар 1", price: 100 },
    { id: 2, name: "Товар 2", price: 200 },
    { id: 3, name: "Товар 3", price: 300 },
  ];

  return (
    <section>
      <h2>Товары</h2>
      {!state.auth.isAuth && (<p style={{color: "red"}}>
        Для добавления товаров в корзину необходимо авторизоваться.
      </p>)}
      {products.map((product) => (
        <div key={product.id}>
          {product.name} - {product.price} грн
          <Button
            buttonClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
            disabled={!state.auth.isAuth}
          >
            Добавить
          </Button>
        </div>
      ))}
    </section>
  );
}
