import styled from "styled-components";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import BookItems from "./BookItems";
import DrinkItems from "./DrinkItems";

export default function CartContent() {
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

const Options = styled.div`
  margin-bottom: 35vh;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;
