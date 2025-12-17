import Logo from "./rocet.svg";
import { useState, useEffect } from "react";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  padding: 20px;
  text-align: center;
`;

export default function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <HeaderContainer>
      <h1>Welcome to My App</h1>
      <img src={Logo} alt="Logo" width="50" />
      <span>Time on the site now : {now.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
