import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import GlobalStyle from "../../assets/globalStyle";
import UserContext from "../../contexts/UserContext";
import DrinkContent from "../../components/Drinks/DrinkContent";

export default function Drinks() {
  const navigate = useNavigate();
  const [drinks, setDrinks] = useState([]);
  const params = useParams();
  const { userData } = useContext(UserContext);
  const { token } = userData;

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/coffebreak/drinks/category/list/${params.id}`;
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(url, auth)
      .then((res) => {
        setDrinks(res.data);
      })
      .catch((err) => {
        const status = err?.response.status;
        switch (status) {
          case 401:
            alert("Sua conexão expirou, por favor tente novamente");
            localStorage.removeItem("userCoffeBreak");
            navigate("/");
            break;
          case 404:
            alert("Categoria de bebidas não encontrada");
            navigate("/categories/drink");
            break;
          case 500:
            alert("Erro de servidor!!!");
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
        <DrinkContent drinks={drinks} />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div``;
