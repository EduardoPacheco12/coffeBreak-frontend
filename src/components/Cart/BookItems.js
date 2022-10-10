import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import { useAxios } from "../../hooks/useAxios";
import { BookCartContainer, Book, Cancel } from "./styles";

function BookCartComponent(props) {
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
          case 404:
            alert("Dados não encontrados, tente novamente");
            break;
          case 500:
            alert("Erro de servidor!!!");
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
    if (response !== undefined) {
      alert("Produto removido do carrinho com sucesso");
      window.location.reload();
    }
  }, [loading]);

  function deleteBookCart() {
    if (window.confirm("Deseja retirar o produto do seu carrinho?")) {
      const userCoffeBreak = localStorage.getItem("userCoffeBreak");
      const infoUsers = JSON.parse(userCoffeBreak);
      let token = "";
      if (infoUsers) {
        token = `Bearer ${infoUsers.token}`;
      }

      fetchData({
        method: "DELETE",
        url: `/coffebreak/books/cart/${props.id}`,
        headers: { Authorization: token },
        data: {},
      });
    }
  }

  return (
    <Book>
      <p>{props.name}</p>
      <p>R${(props.price / 100).toFixed(2)}</p>
      <Cancel onClick={deleteBookCart} />
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
          <BookCartComponent key={value.id} id={value.id} name={value.name} price={value.price} />
        ))}
      </BookCartContainer>
    );
  }
}
