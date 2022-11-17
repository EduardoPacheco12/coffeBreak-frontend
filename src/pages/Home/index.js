import styled from "styled-components";
import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import GlobalStyle from "../../assets/globalStyle";
import UserContext from "../../contexts/UserContext";
import Text from "../../components/Home/Text";
import HomeButton from "../../components/Home/HomeButton";

export default function Home() {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);
  const { token } = userData;

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/coffebreak/home/logged`;
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(url, auth)
      .then()
      .catch((err) => {
        const status = err?.response.status;
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
      });
  }, []);

  return (
    <Container>
      <GlobalStyle />
      <Content>
        <Text>O que você deseja escolher:</Text>
        <Buttons>
          <Link to="/categories/drink">
            <HomeButton>Bebidas</HomeButton>
          </Link>
          <Link to="/categories/book">
            <HomeButton>Livros</HomeButton>
          </Link>
        </Buttons>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div``;

export const Buttons = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
