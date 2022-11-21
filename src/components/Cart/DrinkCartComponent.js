import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GiCancel } from "react-icons/gi";
import UserContext from "../../contexts/UserContext";

export default function DrinkCartComponent({ id, name, price }) {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);
  const { token } = userData;

  const deleteDrinkCart = () => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/coffebreak/drinks/cart/${id}`;
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .delete(url, auth)
      .then(() => {
        alert("Produto removido do carrinho com sucesso");
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
          case 500:
            alert("Erro de servidor!!!");
            localStorage.removeItem("userCoffeBreak");
            navigate("/");
            break;
          default:
            break;
        }
      });
  };

  return (
    <Drink>
      <p>{name}</p>
      <p>R${(price / 100).toFixed(2)}</p>
      <Cancel onClick={deleteDrinkCart} />
    </Drink>
  );
}

const Drink = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #d5c1a8;
  padding: 2vh;
  border-radius: 15px;
  margin-top: 5vh;
  position: relative;
  p {
    font-family: "Oregano";
    font-size: 14px;
    color: #ffffff;
    font-weight: 700;
  }
  p:nth-child(1) {
    margin-right: 20px;
  }
`;

const Cancel = styled(GiCancel)`
  color: #8c501c;
  font-size: 25px;
  position: absolute;
  right: -5px;
  top: -13px;
  &:hover {
    cursor: pointer;
  }
`;
