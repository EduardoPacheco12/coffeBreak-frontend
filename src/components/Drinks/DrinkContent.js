import styled from "styled-components";
import DrinkComponent from "./DrinkComponent";

export default function DrinkContent({ drinks }) {
  if (drinks.length === 0) {
    return <Title>Não há bebidas dessa categoria disponíveis no momento</Title>;
  } else {
    return (
      <>
        <Title>Escolha a bebida que deseja comprar:</Title>
        <Options>
          {drinks.map((value) => (
            <DrinkComponent
              key={value.id}
              id={value.id}
              name={value.name}
              image={value.pictureUrl}
              description={value.description}
              price={value.price}
            />
          ))}
        </Options>
      </>
    );
  }
}

const Options = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  margin-top: 10vh;
  font-family: "Oregano";
  font-size: 26px;
  color: #ffffff;
  font-weight: 700;
  text-align: center;
`;
