import Header from "./components/Header/Header.jsx";
import TeachingSection from "./components/TeachingSection.jsx";
import ButtonSection from "./components/ButtonSection.jsx";
import IntroSection from "./components/introSection.jsx";
import TubsSection from "./components/TubsSection.jsx";
import AboutMeSection from "./components/AboutMeSection.jsx";
import States from "./components/States.jsx";
import Effect from "./components/Effect.jsx";
import { useState, useEffect, } from "react";

export default function App() {
  const [active, setActive] = useState(() => {
    return localStorage.getItem('activeTab') || 'main'
  });

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
    <>
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
      </main>
    </>
  );
}
