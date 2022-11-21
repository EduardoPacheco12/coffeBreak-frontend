import styled from "styled-components";
import GlobalStyle from "../../assets/globalStyle";
import CartContent from "../../components/Cart/CartContent";
import CartInfo from "../../components/Cart/CartInfo";

export default function Cart() {
  return (
    <Container>
      <GlobalStyle />
      <Content>
        <CartContent />
      </Content>
      <CartInfo />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  h3 {
    margin-top: 10vh;
    margin-top: 18vh;
    font-family: "Oregano";
    font-size: 30px;
    color: #ffffff;
    font-weight: 700;
    text-align: center;
  }
`;
