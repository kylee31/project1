"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ClockLoader } from "react-spinners";
import styled from "styled-components";

export default function Main() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(`/main`);
    }, 2000);
  }, []);

  return (
    <Container>
      <Image width={100} height={100} src={"/imgs/travel.png"} alt="logo" />
      <Txt $size={2}>TO TRAVEL IS TO LIVE!</Txt>
      <Spinner>
        <ClockLoader color="black" size={60} />
      </Spinner>
      <Txt $size={1.5}>{`enjoy your trip :)`}</Txt>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Txt = styled.div<{ $size: number }>`
  font-weight: ${(props) => props.theme.weight.exBold};
  font-size: ${(props) => props.$size}rem;
  margin-top: 1rem;
`;

const Spinner = styled.div`
  margin-top: 4rem;
`;
