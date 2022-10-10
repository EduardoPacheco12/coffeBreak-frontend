import { useContext } from "react";
import GlobalStyle from "../../assets/globalStyle";
import CartContext from "../../contexts/CartContext";
import BookItems from "./BookItems";
import DrinkItems from "./DrinkItems";
import { Container, Content, Options } from "./styles";

function CartContent() {
  const { drinkCart, bookCart } = useContext(CartContext);

  return (
    <>
      {drinkCart.length === 0 && bookCart.length === 0 && (
        <>
          <h3>Seu carrinho está vazio</h3>
          <Options>
            <BookItems />
            <DrinkItems />
          </Options>
        </>
      )}
      {(drinkCart.length !== 0 || bookCart.length !== 0) && (
        <>
          <h3>Meu carrinho</h3>
          <Options>
            <BookItems />
            <DrinkItems />
          </Options>
        </>
      )}
    </>
  );
}

export default function CartScreen() {
  return (
    <Container>
      <GlobalStyle />
      <Content>
        <CartContent />
      </Content>
    </Container>
  );
}
