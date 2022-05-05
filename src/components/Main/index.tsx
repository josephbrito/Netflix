import React from "react";
import { AiOutlineRight } from "react-icons/ai";

import { Container, Content, Button } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <Content>
        <h3>Bem-vindo(a) de volta!</h3>
        <h1>Filmes, séries e muito mais. Sem limites.</h1>
        <h2>Assista onde quiser. Cancele quando quiser.</h2>
        <Button>
          Finalize sua assinatura <AiOutlineRight color="white" height="10px" />
        </Button>
      </Content>
    </Container>
  );
};

export default Main;
