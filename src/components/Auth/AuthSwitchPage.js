import styled from "styled-components";

export default function AuthSwitchPage(props) {
  return <Text>{props.children}</Text>;
}

const Text = styled.p`
  padding: 0 75px;
  font-family: "Oregano";
  text-align: center;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-decoration-line: underline;
  color: #ffffff;
`;
