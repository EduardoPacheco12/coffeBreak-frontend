import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import GlobalStyle from "../../assets/globalStyle";
import UserContext from "../../contexts/UserContext";
import BookContent from "../../components/Books/BookContent";

export default function Books() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const params = useParams();
  const { userData } = useContext(UserContext);
  const { token } = userData;

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/coffebreak/books/category/list/${params.id}`;
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(url, auth)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        const status = err?.response.status;
        switch (status) {
          case 401:
            alert("Sua conexão expirou, tente novamente");
            localStorage.removeItem("userCoffeBreak");
            navigate("/");
            break;
          case 404:
            alert("Categoria de livros não encontrada");
            navigate("/categories/book");
            break;
          case 500:
            alert("Erro de Servidor!!!");
            localStorage.removeItem("userCoffeBreak");
            navigate("/");
            break;
          default:
            break;
        }
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

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div``;
