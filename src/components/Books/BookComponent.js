import { BookContainer, Info, Name, Stock, Price } from "./styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";

export default function BookComponent(props) {
  const [price, setPrice] = useState((props.price / 100).toFixed(2));
  const { response, error, loading, fetchData } = useAxios();
  const navigate = useNavigate();

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
          case 409:
            alert("Esgotado, tente outro opção");
            break;
          case 500:
            alert("Erro do servidor!!!");
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
      alert("Produto adicionado no carrinho com sucesso");
      window.location.reload();
    }
  }, [loading]);

  function sendBookToCart() {
    if (window.confirm("Você quer adicionar esse item no seu carrinho?")) {
      const rentedDays = prompt("Por quantos dias você deseja alugar o livro?");
      const userCoffeBreak = localStorage.getItem("userCoffeBreak");
      const infoUsers = JSON.parse(userCoffeBreak);
      let token = "";
      if (infoUsers) {
        token = `Bearer ${infoUsers.token}`;
      }

      fetchData({
        method: "POST",
        url: `/coffebreak/book/${props.id}`,
        headers: { Authorization: token },
        data: { rentedDays },
      });
    }
  }

  return (
    <BookContainer onClick={sendBookToCart}>
      <img src={props.image} alt="Foto de um livro" />
      <Info>
        <Name>{props.name}</Name>
        <Stock>Estoque: {props.totalStock}</Stock>
        <Price>R${price}</Price>
      </Info>
    </BookContainer>
  );
}
