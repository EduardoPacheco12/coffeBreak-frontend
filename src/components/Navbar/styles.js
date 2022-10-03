import styled from "styled-components";

export const Container = styled.div`
  background-color: #47362e;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftInfo = styled.div`
  img {
    width: 90px;
    height: 90px;
  }
`;

export const RightInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2vh;
  p {
    color: #ffffff;
    font-family: "Oswald";
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    margin-right: 10px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
`;
