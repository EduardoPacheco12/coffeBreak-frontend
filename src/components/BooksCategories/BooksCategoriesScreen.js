import { Container, Content, Buttons } from "./styles";
import GlobalStyle from "../../assets/globalStyle";
import { useAxios } from "../../hooks/useAxios";
import BookCategoryButton from "./BookCategoryButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BooksCategoriesScreen() {
  const navigate = useNavigate();
  const { response, error, loading, fetchData } = useAxios();
  const [booksCategories, setBooksCategories] = useState([]);

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
      setBooksCategories(response);
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
      url: "/coffebreak/books/category/list",
      headers: { Authorization: token },
      data: {},
    });
  }, []);

  return (
    <Container>
      <GlobalStyle />
      <Content>
        <h3>Que tipo de livro você deseja escolher:</h3>
        <Buttons>
          {booksCategories.map((value) => (
            <BookCategoryButton key={value.id} name={value.name} />
          ))}
        </Buttons>
      </Content>
    </Container>
  );
}
