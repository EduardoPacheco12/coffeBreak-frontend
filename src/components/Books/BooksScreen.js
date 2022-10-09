import { Container, Content, Options } from "./styles";
import GlobalStyle from "../../assets/globalStyle";
import { useAxios } from "../../hooks/useAxios";
import BookComponent from "./BookComponent";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function BookContent({ books }) {
  if (books.length === 0) {
    return <h3>Não há livros dessa categoria disponíveis no momento</h3>;
  } else {
    return (
      <>
        <h3>Escolha o livro que deseja alugar:</h3>
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

export default function BooksScreen() {
  const navigate = useNavigate();
  const { response, error, loading, fetchData } = useAxios();
  const [books, setBooks] = useState([]);
  const params = useParams();

  function handleError() {
    if (!loading) {
      if (error !== "") {
        const status = error?.response.status;
        switch (status) {
          case 401:
            alert("Sua conexão expirou, tente novamente");
            navigate("/");
            break;
          case 404:
            alert("Categoria de livros não encontrada");
            navigate("/categories/book");
            break;
          case 500:
            alert("Erro de Servidor!!!");
            navigate("/");
            break;
          default:
            break;
        }
      }
    }
  }

  useEffect(() => {
    handleError();
    if (response !== undefined) {
      setBooks(response);
    }
  }, [loading]);

  useEffect(() => {
    const userCoffeBreak = localStorage.getItem("userCoffeBreak");
    const infoUsers = JSON.parse(userCoffeBreak);
    let token = "";
    if (infoUsers) {
      token = `Bearer ${infoUsers.token}`;
    }

    fetchData({
      method: "GET",
      url: `/coffebreak/books/category/list/${params.id}`,
      headers: { Authorization: token },
      data: {},
    });
  }, []);

  return (
    <Container>
      <GlobalStyle />
      <Content>
        <BookContent books={books} />
      </Content>
    </Container>
  );
}
