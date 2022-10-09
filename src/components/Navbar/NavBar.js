import Logo from "../../assets/images/coffeBreak.png";
import { Container, LeftInfo, RightInfo, UserInfo, Click } from "./styles";
import { useContext, useState } from "react";
import MenuContext from "../../contexts/MenuContext";
import { useNavigate } from "react-router-dom";

function InfoUsers({ menuInfo, setMenuInfo }) {
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

export default function NavBar() {
  const userCoffeBreak = localStorage.getItem("userCoffeBreak");
  const infoUsers = JSON.parse(userCoffeBreak);
  const { menuInfo, setMenuInfo } = useContext(MenuContext);
  const [userPhoto, setUserPhoto] = useState(infoUsers ? infoUsers.pictureUrl : "");
  const [userIdentification, setUserIdentification] = useState(infoUsers ? infoUsers.name : "");

  function showMenuInfo() {
    setMenuInfo(!menuInfo);
  }

  return (
    <Container>
      <LeftInfo>
        <img src={Logo} alt="Logo da Coffe Break" />
      </LeftInfo>
      <RightInfo>
        {userIdentification !== "" ? <p>Bem vindo, {userIdentification}</p> : <></>}
        {userPhoto !== "" ? <img onClick={showMenuInfo} src={userPhoto} alt="" /> : <></>}
      </RightInfo>
      <InfoUsers menuInfo={menuInfo} setMenuInfo={setMenuInfo} />
    </Container>
  );
}
