import styled from "styled-components";
import BookComponent from "./BookComponent";

export default function BookContent({ books }) {
  if (books.length === 0) {
    return <Title>Não há livros dessa categoria disponíveis no momento</Title>;
  } else {
    return (
      <>
        <Title>Escolha o livro que deseja alugar:</Title>
        <Options>
          {books.map((value) => (
            <BookComponent
              key={value.id}
              id={value.id}
              name={value.name}
              image={value.pictureUrl}
              totalStock={value.totalStock}
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
