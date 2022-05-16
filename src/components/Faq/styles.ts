import styled from "styled-components";

export const Container = styled.section`
  border-top: 8px solid var(--border);
  height: 108vh;
  background: var(--black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
  color: var(--text);

  > h1 {
    text-align: center;
    font-size: 3.3rem;
    @media (max-width: 640px) {
      font-size: 2rem;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > button {
      margin-top: 2.5%;
    }
  }
`;
