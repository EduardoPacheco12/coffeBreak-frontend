import { BookContainer, Info, Name, Stock, Price } from "./styles";
import { useState } from "react";

export default function BookComponent(props) {
  const [price, setPrice] = useState((props.price / 100).toFixed(2));
  return (
    <BookContainer>
      <img src={props.image} alt="Foto de um livro" />
      <Info>
        <Name>{props.name}</Name>
        <Stock>Estoque: {props.totalStock}</Stock>
        <Price>R${price}</Price>
      </Info>
    </BookContainer>
  );
}
