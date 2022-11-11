import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

export default function AuthButton({ load, text }) {
  return (
    <Button type="submit" disabled={load ? true : false}>
      {load ? <ThreeDots color="#FFFFFF" height={80} width={80} /> : text}
    </Button>
  );
}

const Button = styled.button`
  width: 380px;
  height: 40px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8c501c;
  border: 1px solid #8c501c;
  border-radius: 5px;
  font-family: "Oswald";
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 46px;
  }
`;
