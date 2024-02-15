"use client";

import styled from "styled-components";

function Alert({}) {
  return (
    <Container>
      추천장소 검색 불가 시간
      <br />
      (00:00~07:59)
    </Container>
  );
}

export default Alert;

const Container = styled.div`
  padding: 1rem;
  width: 70%;
  background-color: ${(props) => props.theme.colors.burgundy};
  border-radius: 0.7rem;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: ${(props) => props.theme.weight.semiBold};
`;
