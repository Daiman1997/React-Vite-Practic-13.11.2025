import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { AuthContext } from "./AuthContext.js";
import { CartContext } from "./CartContext";
import Button from "../Button/Button.jsx";
import Login from "./Login.jsx";
import ProductList from "./ProductList.jsx";
import Cart from "./Cart.jsx";

export default function PageContext() {
  // ====== ТЕМА ======

  const { theme, setTheme } = useContext(ThemeContext);

  // ====== АВТОРИЗАЦИЯ ======

  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // ====== КОРЗИНА ======

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Добавление товара в корзину

  const addToCart = (product) => {
    setCart((prev) => {
      // Проверяем, есть ли товар уже в корзине
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // увеличиваем количество
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // Если нет, добавляем новый товар с количеством 1
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  // Уменьшение количества товара в корзине

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  };

  // Удаление товара из корзины

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ====== АКТИВНАЯ ВКЛАДКА ======

  const [active, setActive] = useState("productList");

  return (
    <section>
      <div>
        <h1>Тема: {theme}</h1>
        <Button
          isActive={true}
          buttonClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          Переключить тему
        </Button>
      </div>
      <div>
        <AuthContext.Provider value={{ user, setUser }}>
          <Login />
        </AuthContext.Provider>
      </div>
      <div style={{ padding: "20px" }}>
        <CartContext.Provider value={{ cart, addToCart, decreaseQty, removeFromCart }}>
          <Button
            isActive={active === "productList"}
            buttonClick={() => setActive("productList")}
          >
            Список продуктов
          </Button>
          <Button
            isActive={active === "cart"}
            buttonClick={() => setActive("cart")}
          >
            Корзина
          </Button>
          <div>
            {active === "productList" && <ProductList />}
            {active === "cart" && <Cart />}
          </div>
        </CartContext.Provider>
      </div>
    </section>
  );
}
