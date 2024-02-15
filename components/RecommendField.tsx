import styled from "styled-components";
import RecommendTable from "./recommend/RecommendTable";
import Weather from "./weather/Weather";
import { useIsToggleStore, useTapMenuStore } from "@/states/stores";

export default function RecommendField() {
  const { tapMenu, setTapMenu } = useTapMenuStore();
  //toggle에 따라 위의 map컴포넌트 height 조절해야 하므로 store로 상태관리
  const { isToggle, setIsToggle } = useIsToggleStore();
  const menuList = ["추천장소", "날씨"];

  const selectMenu = (idx: number) => {
    setTapMenu(idx);
  };

  const handleClick = () => {
    isToggle ? setIsToggle(false) : setIsToggle(true);
  };

  return (
    <>
      <Container $isToggle={isToggle}>
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
          <ToggleBtn onClick={handleClick}>{isToggle ? "off" : "on"}</ToggleBtn>
        </Menu>
        <Box $isToggle={isToggle}>
          {0 === tapMenu && <RecommendTable />}
          {1 === tapMenu && <Weather />}
        </Box>
      </Container>
    </>
  );
}

const Container = styled.div<{ $isToggle: boolean }>`
  width: 100%;
  height: ${(props) => (props.$isToggle ? "35vh" : "5vh")};
  position: absolute;
  z-index: 1;
  bottom: 0;
`;

const Menu = styled.div`
  display: flex;
`;

const ToggleBtn = styled.div`
  width: 2.5rem;
  height: 1.5rem;
  position: absolute;
  background-color: black;
  top: 0rem;
  right: 2%;
  border-radius: 1rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${(props) => props.theme.weight.semiBold};
  &:hover {
    cursor: pointer;
  }
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

const Box = styled.div<{ $isToggle: boolean }>`
  width: 100%;
  height: ${(props) => (props.$isToggle ? "30vh" : "0vh")};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: white;
  padding: ${(props) => (props.$isToggle ? "1rem 1rem 0 1rem" : "0")};
`;
