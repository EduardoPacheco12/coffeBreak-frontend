import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GlobalStyle from "../../../assets/globalStyle";
import UserContext from "../../../contexts/UserContext";
import Text from "../../../components/GeneralComponents/Text";
import CategoryButton from "../../../components/Categories/CategoryButton";

export default function DrinksCategories() {
  const navigate = useNavigate();
  const [drinksCategories, setDrinksCategories] = useState([]);
  const { userData } = useContext(UserContext);
  const { token } = userData;

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/coffebreak/drinks/category/list`;
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(url, auth)
      .then((res) => {
        setDrinksCategories(res.data);
      })
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
        <Text>Que tipo de bebida você deseja escolher:</Text>
        <Buttons>
          {drinksCategories.map((value) => (
            <CategoryButton key={value.id} id={value.id} name={value.name} type="drink" />
          ))}
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

const Buttons = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
