import styled from "styled-components";
import Bg from "../../assets/bg.jpg";

export const Container = styled.main`
  height: 100vh;
  background: url(${Bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: color;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--text);
  gap: 1.5em;

  > h3 {
    font-size: 1.5rem;
    @media (max-width: 640px) {
      font-size: 1.2rem;
      text-align: center;
    }
  }

  > h1 {
    font-size: 3rem;
    width: 650px;
    text-align: center;

    @media (max-width: 640px) {
      font-size: 2.7rem;
      width: 75%;
      text-align: center;
    }
  }

  > h2 {
    @media (max-width: 575px) {
      font-size: 1.6rem;
      text-align: center;
    }
  }
`;

export const Button = styled.button`
  width: 330px;
  height: 60px;
  color: var(--text);
  background: var(--red);
  border: none;
  font-size: 1.5rem;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 640px) {
    font-size: 1.2rem;
    width: 70%;
    height: 50px;
    text-align: center;
  }

  &:hover {
    background: var(--red-hov);
  }
`;
