import styled from "styled-components";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../../contexts/UserContext";

export default function BookComponent({ id, name, image, totalStock, price }) {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState((price / 100).toFixed(2));
  const { userData } = useContext(UserContext);
  const { token } = userData;

  const sendBookToCart = () => {
    if (window.confirm("Você quer adicionar esse item no seu carrinho?")) {
      const rentedDays = prompt("Por quantos dias você deseja alugar o livro?");

      const url = `${process.env.REACT_APP_API_BASE_URL}/coffebreak/book/${id}`;
      const body = {
        rentedDays,
      };
      const auth = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios
        .post(url, body, auth)
        .then((res) => {
          alert("Produto adicionado no carrinho com sucesso");
          window.location.reload();
        })
        .catch((err) => {
          const status = err?.response.status;
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
        });
    }
  };

  return (
    <Container onClick={sendBookToCart}>
      <img src={image} alt="Foto de um livro" />
      <Info>
        <Name>{name}</Name>
        <Stock>Estoque: {totalStock}</Stock>
        <Price>R${totalPrice}</Price>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  width: 170px;
  height: 290px;
  background-color: #d5c1a8;
  border: 5px solid #d5c1a8;
  margin-bottom: 5vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  &:hover {
    cursor: pointer;
    p {
      color: #ffffff;
    }
  }
  img {
    width: 150px;
    height: 180px;
    border-radius: 10px;
    display: flex;
    align-self: center;
  }
`;

const Info = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  height: 90px;
  position: relative;
`;

export const Name = styled.p`
  font-family: "Oregano";
  font-size: 24px;
  font-weight: 700;
`;

export const Stock = styled.p`
  margin-top: 5px;
  font-family: "Oregano";
`;

export const Price = styled.p`
  position: absolute;
  right: 0;
  bottom: 0;
  font-family: "Oregano";
  font-size: 20px;
  font-weight: 500;
`;
