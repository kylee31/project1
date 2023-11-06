import styled from "styled-components";

export default function Memo() {
  return (
    <Container>
      <Title>MEMO</Title>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.lightgray};
`;

const Title = styled.div`
  font-weight: ${(props) => props.theme.weight.bold};
`;
