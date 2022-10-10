import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import { useAxios } from "../../hooks/useAxios";
import { BookCartContainer, Book, Cancel } from "./styles";

function BookCartComponent(props) {
  return (
    <Book>
      <p>{props.name}</p>
      <p>R${(props.price / 100).toFixed(2)}</p>
      <Cancel />
    </Book>
  );
}

export default function BookItems() {
  const navigate = useNavigate();
  const { bookCart, setBookCart } = useContext(CartContext);
  const { response, error, loading, fetchData } = useAxios();

  function handleError() {
    if (!loading) {
      if (error !== "") {
        const status = error?.response.status;
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
      }
    }
  }

  useEffect(() => {
    handleError();
    if (response !== undefined) {
      setBookCart(response);
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
      url: "/coffebreak/books/cart",
      headers: { Authorization: token },
      data: {},
    });
  }, []);

  if (bookCart.length === 0) {
    return <></>;
  } else {
    return (
      <BookCartContainer>
        <h4>Livros:</h4>
        {bookCart.map((value) => (
          <BookCartComponent key={value.id} name={value.name} price={value.price} />
        ))}
      </BookCartContainer>
    );
  }
}
