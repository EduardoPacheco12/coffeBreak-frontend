import { useContext, useEffect, useState } from "react";
import GlobalStyle from "../../assets/globalStyle";
import CartContext from "../../contexts/CartContext";
import BookItems from "./BookItems";
import DrinkItems from "./DrinkItems";
import { Container, Content, Options, Result } from "./styles";

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
  const { drinkCart, bookCart } = useContext(CartContext);
  const [totalValue, setTotalValue] = useState(0);
  useEffect(async () => {
    const drink = await drinkCart.reduce((currentValue, previousValue) => previousValue.price + currentValue, 0);
    const book = await bookCart.reduce((currentValue, previousValue) => previousValue.price + currentValue, 0);
    setTotalValue(drink + book);
  }, [drinkCart]);

  return (
    <Container>
      <GlobalStyle />
      <Content>
        <CartContent />
      </Content>
      {drinkCart.length === 0 && bookCart.length === 0 && <></>}
      {(drinkCart.length !== 0 || bookCart.length !== 0) && (
        <Result>
          <p>Valor Total: R${(totalValue / 100).toFixed(2)}</p>
          <button>Confirmar compra</button>
        </Result>
      )}
    </Container>
  );
}
