import { Container, Content, Buttons } from "./styles";
import GlobalStyle from "../../assets/globalStyle";
import { useAxios } from "../../hooks/useAxios";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function HomeScreen() {
  const navigate = useNavigate();
  const { response, error, loading, fetchData } = useAxios();

  function handleError() {
    if (!loading) {
      if (error !== "") {
        const status = error?.response.status;
        switch (status) {
          case 401:
            alert("Sua conexão expirou, por favor tente novamente");
            localStorage.removeItem("userCoffeBreak");
            navigate("/");
            break;
          case 500:
            alert("Erro do servidor!!!");
            localStorage.removeItem("userCoffeBreak");
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
      url: "/coffebreak/home/logged",
      headers: { Authorization: token },
      data: {},
    });
  }, []);

  return (
    <Container>
      <GlobalStyle />
      <Content>
        <h3>O que você deseja escolher:</h3>
        <Buttons>
          <Link to="/categories/drink">
            <button>Bebidas</button>
          </Link>
          <Link to="/categories/book">
            <button>Livros</button>
          </Link>
        </Buttons>
      </Content>
    </Container>
  );
}
