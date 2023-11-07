import styled from "styled-components";

export default function Memo() {
  return (
    <Container>
      <Title>MEMO</Title>
      <MemoBox></MemoBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.lightgray};
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${(props) => props.theme.weight.bold};
  margin-bottom: 1rem;
`;

const MemoBox = styled.textarea`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: ${(props) => props.theme.colors.lightgray};
  border: 0;
  outline: 0;
  resize: none;
  &::-webkit-scrollbar {
    width: 0.3rem;
    background-color: ${(props) => props.theme.colors.lightgray};
  }
  &::-webkit-scrollbar-thumb {
    width: 0.2rem;
    background-color: gray;
    border-radius: 1rem;
  }
`;
