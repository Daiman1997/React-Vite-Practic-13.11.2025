import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from "../Button/Button";

export default function ProductList() {
    const { dispatch } = useContext(CartContext);

    const products = [
        { id: 1, name: "Товар 1", price: 100 },
        { id: 2, name: "Товар 2", price: 200 },
        { id: 3, name: "Товар 3", price: 300 },
    ]

    return (
        <section>
            <h2>Товары</h2>
            {products.map(product => (
                <div key={product.id}>
                    {product.name} - {product.price} грн
                    <Button
                    buttonClick={() => 
                        dispatch({ type: "ADD_ITEM", payload: product})
                    }>
                        Добавить
                    </Button>
                </div>
            ))}
        </section>
    )
}