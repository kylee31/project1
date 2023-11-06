import Calendar from "@/components/Calendar";
import Memo from "@/components/Memo";
import styled from "styled-components";

export default function RightSection() {
  return (
    <Container>
      <Calendar />
      <Memo />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: calc(100vh - 4rem);
`;
