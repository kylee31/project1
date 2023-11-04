import styled from "styled-components";

export default function Memo() {
  return (
    <Container>
      <>메모</>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;
