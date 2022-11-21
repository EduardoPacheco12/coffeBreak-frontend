import styled from "styled-components";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CartContext from "../../contexts/CartContext";
import UserContext from "../../contexts/UserContext";
import BookCartComponent from "./BookCartComponent";

export default function BookItems() {
  const navigate = useNavigate();
  const { bookCart, setBookCart } = useContext(CartContext);
  const { userData } = useContext(UserContext);
  const { token } = userData;

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/coffebreak/books/cart`;
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(url, auth)
      .then((res) => {
        setBookCart(res.data);
      })
      .catch((err) => {
        const status = err?.response.status;
        switch (status) {
          case 401:
            alert("Sua conexão expirou, por favor tente novamente");
            navigate("/");
            break;
          case 500:
            alert("Erro do servidor!!!");
            navigate("/");
            break;
          default:
            break;
        }
      });
  }, []);

  if (bookCart.length === 0) {
    return <></>;
  } else {
    return (
      <Container>
        <h4>Livros:</h4>
        {bookCart.map((value) => (
          <BookCartComponent key={value.id} id={value.id} name={value.name} price={value.price} />
        ))}
      </Container>
    );
  }
}

const Container = styled.div`
  h4 {
    margin-top: 5vh;
    font-family: "Oregano";
    font-size: 20px;
    color: #ffffff;
    font-weight: 700;
  }
`;
