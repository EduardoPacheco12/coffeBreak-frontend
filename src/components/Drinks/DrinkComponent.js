import { DrinkContainer, Info, Name, Description, Price } from "./styles";

export default function DrinkComponent(props) {
  return (
    <DrinkContainer>
      <img src="https://static0.thegamerimages.com/wordpress/wp-content/uploads/2022/09/1580410881_5.png" alt="Foto de uma bebida" />
      <Info>
        <Name>Espresso</Name>
        <Description>Café, Café, Café</Description>
        <Price>R$15.00</Price>
      </Info>
    </DrinkContainer>
  );
}
