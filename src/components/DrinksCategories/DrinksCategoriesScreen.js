import { Container, Content, Buttons } from "./styles";
import GlobalStyle from "../../assets/globalStyle";
import DrinkCategoryButton from "./DrinkCategoryButton";
import { useAxios } from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DrinksCategoriesScreen() {
  const navigate = useNavigate();
  const { response, error, loading, fetchData } = useAxios();
  const [drinksCategories, setDrinksCategories] = useState([]);

  function handleError() {
    if (!loading) {
      if (error !== "") {
        const status = error?.response.status;
        switch (status) {
          case 401:
            alert("Your connection has timed out, please try again");
            navigate("/");
            break;
          case 404:
            alert("Your connection has lost, please try again");
            navigate("/");
            break;
          case 500:
            alert("Server Error!!!");
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
      setDrinksCategories(response);
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
      url: "/coffebreak/drinks/category/list",
      headers: { Authorization: token },
      data: {},
    });
  }, []);

  return (
    <Container>
      <GlobalStyle />
      <Content>
        <h3>Que tipo de bebida você deseja escolher:</h3>
        <Buttons>
          {drinksCategories.map((value) => (
            <DrinkCategoryButton key={value.id} id={value.id} name={value.name} />
          ))}
        </Buttons>
      </Content>
    </Container>
  );
}
