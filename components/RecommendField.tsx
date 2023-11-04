import styled from "styled-components";
import RecommendTable from "./RecommendTable";
import Weather from "./Weather";
import { useState } from "react";

export default function RecommendField() {
  const [tapMenu, setTapMenu] = useState(0);
  const menuList = ["추천장소", "날씨"];

  const selectMenu = (idx: number) => {
    setTapMenu(idx);
  };

  return (
    <Container>
      <Menu>
        {menuList.map((item, idx) => {
          return (
            <Tap
              key={"menu" + idx}
              className={idx === tapMenu ? "current" : "sub"}
              onClick={() => selectMenu(idx)}
            >
              {item}
            </Tap>
          );
        })}
      </Menu>
      <Box>
        {0 === tapMenu && <RecommendTable />}
        {1 === tapMenu && <Weather />}
      </Box>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 35vh;
  position: absolute;
  z-index: 1;
  bottom: 0;
`;

const Menu = styled.div`
  display: flex;
`;

const Tap = styled.span`
  width: max-content;
  height: 5vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  font-size: ${(props) => props.theme.size.small};
  font-weight: ${(props) => props.theme.weight.semiBold};
  &:hover {
    cursor: pointer;
  }
  .sub& {
    background-color: ${(props) => props.theme.colors.lightgray};
    color: ${(props) => props.theme.colors.gray};
  }
  & + & {
    border-left: 1.5px solid lightgray;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
