"use client";

import theme from "@/styles/theme";
import styled from "styled-components";

export default function Home() {
  return <Div>project setting...</Div>;
}

const Div = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
`;
