import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  h3 {
    margin-top: 10vh;
    font-family: "Oregano";
    font-size: 26px;
    color: #ffffff;
    font-weight: 700;
    text-align: center;
  }
`;

export const Buttons = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
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
  }
`;
