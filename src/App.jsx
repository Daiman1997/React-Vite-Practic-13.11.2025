import Header from "./components/Header/Header.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import ButtonSection from "./components/ButtonSection.jsx";
import IntroSection from "./components/introSection.jsx";
import TubsSection from "./components/TubsSection.jsx";
import AboutMeSection from "./components/AboutMeSection.jsx";
import States from "./components/States.jsx";
import Effect from "./components/Effect.jsx";
import SaveReference from "./components/SaveReference.jsx";
import PageContext from "./components/Context/PageContext.jsx";
import Reducer from "./components/Reducer.jsx";
import CartMain from "./components/Shopping_Cart/CartMain.jsx";
import { useState, useEffect, } from "react";
import { ThemeContext } from "./components/Context/ThemeContext.jsx";


export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  });

  const [active, setActive] = useState(() => {
    return localStorage.getItem('activeTab') || 'main'
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Читаем значение таба из URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");
    if (tab) {
      setActive(tab);
    }
  }, []);

  // Обновляем URL при изменении активной вкладки
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("tab", active);
    window.history.replaceState({}, "", `?${params.toString()}`);
  }, [active]);

  useEffect(() => {
    localStorage.setItem("activeTab", active);
  }, [active]); 

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <main>
        <IntroSection />
        <TubsSection active={active} onChange={setActive} />

        {active === "main" && (
          <>
            <TeachingSection />
            <ButtonSection />
          </>
        )}
        {active === "aboutMe" && <AboutMeSection />}
        {active === "states" && <States />}
        {active === "effect" && <Effect />}
        {active === "saveReference" && <SaveReference />}
        {active === "context" && <PageContext />}
        {active === 'reducer' && <Reducer />}
        {active === 'cart' && <CartMain />}
      </main>
    </ThemeContext.Provider>
  );
}
