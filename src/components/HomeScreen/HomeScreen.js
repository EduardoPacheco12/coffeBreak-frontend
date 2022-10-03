import { Container, Content, Buttons } from "./styles";
import GlobalStyle from "../../assets/globalStyle";
import { useAxios } from "../../hooks/useAxios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeScreen() {
  const navigate = useNavigate();
  const { response, error, loading, fetchData } = useAxios();

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
    console.log(response);
  }, [loading]);

  useEffect(() => {
    const userCoffeBreak = localStorage.getItem("userCoffeBreak");
    const infoUsers = JSON.parse(userCoffeBreak);
    console.log(infoUsers);
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
          <button>Bebidas</button>
          <button>Livros</button>
        </Buttons>
      </Content>
    </Container>
  );
}
