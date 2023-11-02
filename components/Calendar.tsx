import styled from "styled-components";

export default function Calendar() {
  return (
    <Container>
      <>달력</>
    </Container>
  );
}

const Container = styled.div`
  width: 30%;
  height: calc(70vh - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;
