import styled from "styled-components";

export const Container = styled.header`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  position: absolute;
  top: 0;

  > div img {
    height: 100%;
    width: 150px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1.5em;

  > select {
    background: none;
    color: var(--text);
    padding: 5px 10px;
  }

  > select option {
    background: var(--gray);
  }
`;

export const Button = styled.button`
  width: 60px;
  color: var(--text);
  background: var(--red);
  border: none;
  padding: 10px 0;
  border-radius: 6px;
  cursor: pointer;
`;
