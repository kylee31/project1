"use client";

import styled from "styled-components";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Header from "@/components/Header";

export default function TotalSection() {
  return (
    <div>
      <Header />
      <Container>
        <LeftSection />
        <RightSection />
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
