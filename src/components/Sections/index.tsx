import React from "react";
import Section from "../Section";
import Tv from "../../assets/tv.png";
import Mobile from "../../assets/mobile.jpg";
import Pc from "../../assets/pc.png";
import Kids from "../../assets/kids.png";

import { Container } from "./styles";

const Sections: React.FC = () => {
  return (
    <Container>
      <Section
        title="Aproveite na TV."
        content="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos."
        image={Tv}
        direction="row"
      />
      <Section
        title="Baixe séries para assistir offline.."
        content="Salve seus títulos favoritos e sempre tenha algo para assistir."
        image={Mobile}
        direction="row-reverse"
      />
      <Section
        title="Assista quando quiser."
        content="Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso."
        image={Pc}
        direction="row"
      />
      <Section
        title="Crie perfis para crianças."
        content="Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso."
        image={Kids}
        direction="row-reverse"
      />
    </Container>
  );
};

export default Sections;
