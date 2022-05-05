import React from "react";

import { Container } from "./styles";

import Question from "../Question";
import { Button } from "../Main/styles";

import { AiOutlineRight } from "react-icons/ai";

const Faq: React.FC = () => {
  return (
    <Container>
      <h1>Perguntas frequentes</h1>
      <div>
        <Question question="O que é a Netflix?" />
        <Question question="Qaunto custa a Netflix?" />
        <Question question="Onde posso assistir?" />
        <Question question="Como faço pra cancelar?" />
        <Question question="O que eu posso assistir na Netflix?" />
        <Question question="A Netflix é adequada para crianças?" />
        <Button>
          Finalize sua assinatura <AiOutlineRight color="white" height="10px" />
        </Button>
      </div>
    </Container>
  );
};

export default Faq;
