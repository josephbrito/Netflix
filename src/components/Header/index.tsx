import React from "react";
import Logo from "../../assets/logo.png";

import { Container, Buttons, Button } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={Logo} />
      </div>

      <Buttons>
        <select>
          <option>Português</option>
          <option>Inglês</option>
        </select>
        <Button>Sair</Button>
      </Buttons>
    </Container>
  );
};

export default Header;
