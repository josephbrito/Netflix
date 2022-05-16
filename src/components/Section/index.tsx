import React from "react";

import { Container } from "./styles";

interface Props {
  title: string;
  image: string;
  content: string;
  direction: string;
}

const Section: React.FC<Props> = ({
  title,
  image,
  content,
  direction,
}: Props) => {
  return (
    <Container direction={direction}>
      <div className="title">
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </div>

      <div className="image">
        <img src={image} />
      </div>
    </Container>
  );
};

export default Section;
