import styled from "styled-components";

export default function Map() {
  return (
    <Container>
      <>지도</>
    </Container>
  );
}

const Container = styled.div`
  width: 70%;
  height: calc(70vh - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;
