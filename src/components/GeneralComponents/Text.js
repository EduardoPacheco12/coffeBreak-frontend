import styled from "styled-components";

export default function Text(props) {
  return <HomeText>{props.children}</HomeText>;
}

const HomeText = styled.h3`
  margin-top: 10vh;
  font-family: "Oregano";
  font-size: 26px;
  color: #ffffff;
  font-weight: 700;
  text-align: center;
`;
