import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from "../Button/Button";

export default function ProductList() {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Product 1", price: 100},
    { id: 2, name: "Product 2", price: 200},
    { id: 3, name: "Product 3", price: 300},
  ];

  return (
    <section>
      <h2>Список продуктов</h2>
      {products.map((products) => (
        <div key={products.id} style={{ marginBottom: "10px" }}>
          <strong>{products.name}</strong> - {products.price} грн 
          <Button className="margin-left" isActive={true} buttonClick={() => addToCart(products)}>
            Добавить в корзину
          </Button>
        </div>
      ))}
    </section>
  );
}
