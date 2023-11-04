import Map from "@/components/Map";
import RecommendField from "@/components/RecommendField";
import styled from "styled-components";

export default function LeftSection() {
  return (
    <Container>
      <Map />
      <RecommendField />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: calc(100vh - 4rem);
  position: relative;
`;
