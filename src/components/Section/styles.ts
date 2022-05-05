import styled from "styled-components";
interface Props {
  area: string;
  direction: string;
}

export const Container = styled.div<Props>`
  grid-area: ${(props) => props.area};
  height: 65vh;
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

  > div img {
    height: 90%;
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
  }

  > .title div h1 {
    font-size: 2.78rem;
    margin-bottom: 15px;
  }
`;
