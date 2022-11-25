import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function InfoUsers({ menuInfo, setMenuInfo }) {
  const navigate = useNavigate();

  function goCart() {
    setMenuInfo(!menuInfo);
    navigate("/cart");
  }

  function finishSession() {
    setMenuInfo(!menuInfo);
    localStorage.removeItem("userCoffeBreak");
    navigate("/");
  }

  if (menuInfo === false) {
    return <></>;
  } else {
    return (
      <UserInfo>
        <p onClick={goCart}>Carrinho</p>
        <p>Meus livros alugados</p>
        <p onClick={finishSession}>Sair</p>
      </UserInfo>
    );
  }
}

const UserInfo = styled.div`
  position: absolute;
  background-color: #47362e;
  right: 0;
  bottom: -90px;
  border-top: 1px solid #47362e;
  border-radius: 0px 0px 0px 20px;
  p {
    font-family: "Oregano";
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
    padding-top: 5px;
    padding-right: 15px;
    padding-left: 10px;
    padding-bottom: 5px;
    &:hover {
      cursor: pointer;
      color: #000000;
    }
  }
`;
