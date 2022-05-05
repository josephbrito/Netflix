import React from "react";
import { RiAddFill } from "react-icons/ri";

import { Container } from "./styles";

interface Props {
  question: string;
}

const Question: React.FC<Props> = ({ question }: Props) => {
  return (
    <Container>
      <span> {question} </span>

      <RiAddFill color="white" cursor="pointer" />
    </Container>
  );
};

export default Question;
