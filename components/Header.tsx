import Button from "@/common/Button";
import { useSearchWord } from "@/states/stores";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [inputValue, setInputValue] = useState("");
  const { searchWord, setSearchWord } = useSearchWord();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    setSearchWord(inputValue);
    if (inputValue === "") {
      setSearchWord("대한민국");
    }
  };

  // useEffect(() => {
  //   // console.log(searchWord);
  // }, [searchWord]);

  return (
    <Box>
      <LContainer>
        <Image
          src="/imgs/logo.png"
          alt="logo"
          priority
          width={400}
          height={43}
        />
        <InputSet>
          <InputBox
            placeholder="경기도 고양시 일산서구"
            value={inputValue}
            onChange={handleInputChange}
          />
          <AirPlaneBtn onClick={handleSubmit}>
            <Image src="/imgs/airport.png" alt="airport" priority fill />
          </AirPlaneBtn>
        </InputSet>
      </LContainer>
      <RContainer>
        <Button wid={6}>Log In</Button>
      </RContainer>
    </Box>
  );
}
const Box = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  height: 4rem;
  border-bottom: 1px solid black;
  position: sticky;
  top: 0;
  padding: 0.8rem 0;
`;

const LContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
`;
const RContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 1rem;
`;

const InputSet = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  height: 100%;
  &:focus {
    color: transparent;
  }
`;

const InputBox = styled.input`
  width: 12.5rem;
  height: 100%;
  border: 1.5px solid black;
  padding-left: 0.5rem;
  margin-right: 0.7rem;
  font-size: ${(props) => props.theme.size.small};
`;

const AirPlaneBtn = styled.button`
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
  border: 1.5px solid black;
  background-color: ${(props) => props.theme.colors.white};
  &:hover {
    cursor: pointer;
  }
`;
