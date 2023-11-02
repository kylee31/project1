import styled from "styled-components";

const Button = ({ wid, children }: { wid: number; children: string }) => {
  return <Btn wid={wid}>{children}</Btn>;
};

export default Button;

const Btn = styled.button<{ wid: number }>`
  width: ${(props) => props.wid}rem;
  height: 100%;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  font-weight: ${(props) => props.theme.weight.semiBold};
  &:hover {
    cursor: pointer;
  }
`;
