import styled from "styled-components";
interface Props {
  direction: string;
}

export const Container = styled.div<Props>`
  min-height: 65vh;
  background-color: var(--black);
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.direction};
  justify-content: space-around;
  border-top: 8px solid var(--border);
  flex-wrap: wrap;

  > div {
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  > .image {
    height: 90%;
    display: flex;
    justify-content: center;
  }

  > .image img {
    height: 100%;
    width: 60%;
  }

  > .title {
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: var(--text);
    font-size: 1.5rem;
    width: 500px;
    flex-wrap: wrap;

    @media (max-width: 640px) {
      font-size: 1.3rem;
      text-align: center;
    }
  }

  > .title div h1 {
    font-size: 2.78rem;
    margin-bottom: 15px;

    @media (max-width: 640px) {
      font-size: 1.6rem;
      text-align: center;
    }
  }
`;
