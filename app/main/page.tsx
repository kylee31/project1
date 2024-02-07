"use client";

import Alert from "@/components/Alert";
import Header from "@/components/Header";
import LeftSection from "@/section/LeftSection";
import RightSection from "@/section/RightSection";
import styled from "styled-components";

export default function Home() {
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
