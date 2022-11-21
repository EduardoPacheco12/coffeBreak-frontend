import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../contexts/CartContext";

export default function CartInfo() {
  const { drinkCart, bookCart } = useContext(CartContext);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(async () => {
    const drink = await drinkCart.reduce((currentValue, previousValue) => previousValue.price + currentValue, 0);
    const book = await bookCart.reduce((currentValue, previousValue) => previousValue.price + currentValue, 0);
    setTotalValue(drink + book);
  }, [drinkCart, bookCart]);

  return (
    <>
      {drinkCart.length === 0 && bookCart.length === 0 && <></>}
      {(drinkCart.length !== 0 || bookCart.length !== 0) && (
        <Result>
          <p>Valor Total: R${(totalValue / 100).toFixed(2)}</p>
          <button>Confirmar compra</button>
        </Result>
      )}
    </>
  );
}

const Result = styled.div`
  position: fixed;
  background-color: #d5c1a8;
  height: 15vh;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  p {
    font-family: "Oregano";
    font-size: 20px;
    color: #ffffff;
    font-weight: 700;
  }
  button {
    height: 40px;
    background-color: #8c501c;
    border: 1px solid #8c501c;
    font-family: "Oregano";
    font-size: 16px;
    color: #ffffff;
    font-weight: 700;
    &:hover {
      cursor: pointer;
      color: #000000;
    }
  }
`;
