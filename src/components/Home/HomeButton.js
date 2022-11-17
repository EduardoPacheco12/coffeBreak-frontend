import styled from "styled-components";

export default function HomeButton(props) {
  return <Button>{props.children}</Button>;
}

const Button = styled.button`
  width: 240px;
  height: 100px;
  margin-top: 10vh;
  font-family: "Oregano";
  font-size: 26px;
  background-color: #d5c1a8;
  border: 5px solid #d5c1a8;
  border-radius: 10px;
  color: #000000;
  font-weight: 700;
  &:hover {
    cursor: pointer;
    color: #ffffff;
  }
`;
