import { Link } from "react-router-dom";
import styled from "styled-components";

export const All = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10vh;
  @media (max-width: 767px) {
    margin-bottom: 5vh;
    margin-bottom: 5vh;
  }
`;

export const Img = styled.div`
  display: flex;
  justify-content: center;
  img {
    max-width: 325px;
    height: 325px;
  }
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 380px;
    height: 50px;
    margin-bottom: 14px;
    background: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 5px;
    font-family: "Oswald";
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    color: #bfa98e;
    padding-left: 15px;
    ::-webkit-input-placeholder {
      font-family: "Oswald";
      font-weight: 700;
      font-size: 22px;
      line-height: 33px;
      color: #bfa98e;
    }
  }
  button {
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
  }
  @media (max-width: 767px) {
    padding: 0 10vw;
    input {
      width: 100%;
      height: 55px;
    }
    button {
      width: 100%;
      height: 46px;
    }
  }
`;

export const BackLogin = styled.p`
  padding: 0 75px;
  font-family: "Oregano";
  text-align: center;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-decoration-line: underline;
  color: #ffffff;
`;

export const Click = styled(Link)`
  text-decoration: none;
`;
