import Logo from "../../assets/images/coffeBreak.png";
import { Container, LeftInfo, RightInfo } from "./styles";
import { useState } from "react";

export default function NavBar() {
  const userCoffeBreak = localStorage.getItem("userCoffeBreak");
  const infoUsers = JSON.parse(userCoffeBreak);
  const [userPhoto, setUserPhoto] = useState(infoUsers ? infoUsers.pictureUrl : "");
  const [userIdentification, setUserIdentification] = useState(infoUsers ? infoUsers.name : "");

  return (
    <Container>
      <LeftInfo>
        <img src={Logo} alt="Logo da Coffe Break" />
      </LeftInfo>
      <RightInfo>
        {userIdentification !== "" ? <p>Bem vindo, {userIdentification}</p> : <></>}
        {userPhoto !== "" ? <img src={userPhoto} alt="" /> : <></>}
      </RightInfo>
    </Container>
  );
}
