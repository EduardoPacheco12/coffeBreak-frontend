import Logo from "../../assets/images/coffeBreak.png";
import { Container, LeftInfo, RightInfo } from "./styles";

export default function NavBar() {
  return (
    <Container>
      <LeftInfo>
        <img src={Logo} alt="Logo da Coffe Break" />
      </LeftInfo>
      <RightInfo>
        <p>Bem vindo, Eduardo </p>
        <img src="https://i.pinimg.com/originals/1d/4d/69/1d4d69c694c8ba1034c0e9552f457ecf.jpg" alt="" />
      </RightInfo>
    </Container>
  );
}
