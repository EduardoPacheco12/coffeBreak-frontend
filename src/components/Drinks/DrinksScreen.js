import { useContext } from "react";
import GlobalStyle from "../../assets/globalStyle";
import DrinkContext from "../../contexts/DrinkContext";
import { useAxios } from "../../hooks/useAxios";
import DrinkComponent from "./DrinkComponent";
import { Container, Content, Options } from "./styles";

export default function Drinks() {
  const { response, error, loading, fetchData } = useAxios();
  const { drinkCategoryNumber } = useContext(DrinkContext);

  return (
    <Container>
      <GlobalStyle />
      <Content>
        <h3>Escolha a bebida que deseja comprar:</h3>
        <Options>
          <DrinkComponent />
        </Options>
      </Content>
    </Container>
  );
}
