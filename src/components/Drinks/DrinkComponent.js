import { useEffect, useState } from "react";
import { DrinkContainer, Info, Name, Description, Price } from "./styles";
import { useAxios } from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";

export default function DrinkComponent(props) {
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
            navigate("/");
            break;
          case 404:
            alert("Dados não encontrados, tente novamente");
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
      alert("Produto adicionado no carrinho com sucesso");
    }
  }, [loading]);

  function sendDrinktoCart() {
    if (window.confirm("Você quer adicionar esse item no seu carrinho?")) {
      const userCoffeBreak = localStorage.getItem("userCoffeBreak");
      const infoUsers = JSON.parse(userCoffeBreak);
      let token = "";
      if (infoUsers) {
        token = `Bearer ${infoUsers.token}`;
      }

      fetchData({
        method: "POST",
        url: `/coffebreak/drink/${props.id}`,
        headers: { Authorization: token },
        data: {},
      });
    }
  }

  return (
    <DrinkContainer onClick={sendDrinktoCart}>
      <img src={props.image} alt="Foto de uma bebida" />
      <Info>
        <Name>{props.name}</Name>
        <Description>{props.description}</Description>
        <Price>R${price}</Price>
      </Info>
    </DrinkContainer>
  );
}
