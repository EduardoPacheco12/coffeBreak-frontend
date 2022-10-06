import { useState } from "react";
import { DrinkContainer, Info, Name, Description, Price } from "./styles";

export default function DrinkComponent(props) {
  const [price, setPrice] = useState((props.price / 100).toFixed(2));
  return (
    <DrinkContainer>
      <img src={props.image} alt="Foto de uma bebida" />
      <Info>
        <Name>{props.name}</Name>
        <Description>{props.description}</Description>
        <Price>R${price}</Price>
      </Info>
    </DrinkContainer>
  );
}
