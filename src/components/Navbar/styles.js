import styled from "styled-components";

export const Container = styled.div`
  background-color: #47362e;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
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
    font-family: "Oregano";
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    margin-right: 10px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
`;

export const UserInfo = styled.div`
  position: absolute;
  background-color: #47362e;
  right: 0;
  bottom: -90px;
  border-top: 1px solid #47362e;
  border-radius: 0px 0px 0px 20px;
  p {
    font-family: "Oregano";
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
    padding-top: 5px;
    padding-right: 15px;
    padding-left: 10px;
    padding-bottom: 5px;
  }
`;
