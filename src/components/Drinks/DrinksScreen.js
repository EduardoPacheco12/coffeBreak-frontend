import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GlobalStyle from "../../assets/globalStyle";
import { useAxios } from "../../hooks/useAxios";
import DrinkComponent from "./DrinkComponent";
import { Container, Content, Options } from "./styles";

function DrinkContent({ drinks }) {
  if (drinks.length === 0) {
    return <h3>Não há bebidas dessa categoria disponíveis no momento</h3>;
  } else {
    return (
      <>
        <h3>Escolha a bebida que deseja comprar:</h3>
        <Options>
          {drinks.map((value) => (
            <DrinkComponent key={value.id} name={value.name} image={value.pictureUrl} description={value.description} price={value.price} />
          ))}
        </Options>
      </>
    );
  }
}

export default function DrinksScreen() {
  const navigate = useNavigate();
  const { response, error, loading, fetchData } = useAxios();
  const [drinks, setDrinks] = useState([]);
  const params = useParams();

  function handleError() {
    if (!loading) {
      if (error !== "") {
        const status = error?.response.status;
        switch (status) {
          case 401:
            alert("Sua conexão expirou, por favor tente novamente");
            navigate("/");
            break;
          case 404:
            alert("Categoria de bebidas não encontrada");
            navigate("/categories/drink");
            break;
          case 500:
            alert("Erro de servidor!!!");
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
      setDrinks(response);
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
      url: `/coffebreak/drinks/category/list/${params.id}`,
      headers: { Authorization: token },
      data: {},
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
