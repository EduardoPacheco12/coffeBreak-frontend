import styled from "styled-components";
import { GiCancel } from "react-icons/gi";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  h3 {
    margin-top: 10vh;
    font-family: "Oregano";
    font-size: 30px;
    color: #ffffff;
    font-weight: 700;
    text-align: center;
  }
`;

export const Options = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const BookCartContainer = styled.div`
  h4 {
    margin-top: 5vh;
    font-family: "Oregano";
    font-size: 20px;
    color: #ffffff;
    font-weight: 700;
  }
`;

export const Book = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #d5c1a8;
  padding: 2vh;
  border-radius: 15px;
  margin-top: 5vh;
  position: relative;
  @media (min-width: 1024px) {
    margin-right: 80px;
  }
  p {
    font-family: "Oregano";
    font-size: 14px;
    color: #ffffff;
    font-weight: 700;
  }
  p:nth-child(1) {
    margin-right: 20px;
  }
`;

export const DrinkCartContainer = styled.div`
  h4 {
    margin-top: 5vh;
    font-family: "Oregano";
    font-size: 20px;
    color: #ffffff;
    font-weight: 700;
  }
`;

export const Drink = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #d5c1a8;
  padding: 2vh;
  border-radius: 15px;
  margin-top: 5vh;
  position: relative;
  p {
    font-family: "Oregano";
    font-size: 14px;
    color: #ffffff;
    font-weight: 700;
  }
  p:nth-child(1) {
    margin-right: 20px;
  }
`;

export const Cancel = styled(GiCancel)`
  color: #8c501c;
  font-size: 25px;
  position: absolute;
  right: -5px;
  top: -13px;
  &:hover {
    cursor: pointer;
  }
`;
