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

export const Options = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DrinkContainer = styled.div`
  width: 200px;
  height: 250px;
  background-color: #d5c1a8;
  border: 5px solid #d5c1a8;
  margin-bottom: 5vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  &:hover {
    cursor: pointer;
    p {
      color: #ffffff;
    }
  }
  img {
    width: 175px;
    height: 140px;
    border-radius: 10px;
    display: flex;
    align-self: center;
  }
`;

export const Info = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  height: 90px;
  position: relative;
`;

export const Name = styled.p`
  font-family: "Oregano";
  font-size: 24px;
  font-weight: 700;
`;

export const Description = styled.p`
  margin-top: 5px;
  font-family: "Oregano";
`;

export const Price = styled.p`
  position: absolute;
  right: 0;
  bottom: 0;
  font-family: "Oregano";
  font-size: 20px;
  font-weight: 500;
`;
