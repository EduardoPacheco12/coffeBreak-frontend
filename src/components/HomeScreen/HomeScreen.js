import { Container, Content, Buttons } from "./styles";
import GlobalStyle from "../../assets/globalStyle";

export default function HomeScreen() {
  return (
    <Container>
      <GlobalStyle />
      <Content>
        <h3>O que você deseja escolher:</h3>
        <Buttons>
          <button>Bebidas</button>
          <button>Livros</button>
        </Buttons>
      </Content>
    </Container>
  );
}
