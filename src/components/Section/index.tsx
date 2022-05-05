import React from "react";

import { Container } from "./styles";

interface Props {
  title: string;
  image: string;
  area: string;
  content: string;
  direction: string;
}

const Section: React.FC<Props> = ({
  title,
  image,
  area,
  content,
  direction,
}: Props) => {
  return (
    <Container area={area} direction={direction}>
      <div className="title">
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </div>

      <div>
        <img src={image} />
      </div>
    </Container>
  );
};

export default Section;
