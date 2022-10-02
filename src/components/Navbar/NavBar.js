import Logo from "../../assets/images/coffeBreak.png";
import { Container, LeftInfo, RightInfo } from "./styles";
import { useState } from "react";

export default function NavBar() {
  const userCoffeBreak = localStorage.getItem("userCoffeBreak");
  const infoUsers = JSON.parse(userCoffeBreak);
  const [userPhoto, setUserPhoto] = useState(infoUsers.pictureUrl);
  const [userIdentification, setUserIdentification] = useState(infoUsers.name);

  return (
    <Container>
      <LeftInfo>
        <img src={Logo} alt="Logo da Coffe Break" />
      </LeftInfo>
      <RightInfo>
        <p>Bem vindo, {userIdentification} </p>
        <img src={userPhoto} alt="" />
      </RightInfo>
    </Container>
  );
}
