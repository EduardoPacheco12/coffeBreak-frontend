import styled from "styled-components";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/coffeBreak.png";
import MenuContext from "../../contexts/MenuContext";
import UserContext from "../../contexts/UserContext";
import InfoUsers from "./InfoUsers";

export default function NavBar() {
  const { menuInfo, setMenuInfo } = useContext(MenuContext);
  const { userData } = useContext(UserContext);
  const { pictureUrl, name } = userData;
  const [userPhoto, setUserPhoto] = useState(pictureUrl ? pictureUrl : "");
  const [userIdentification, setUserIdentification] = useState(name ? name : "");

  function showMenuInfo() {
    setMenuInfo(!menuInfo);
  }

  return (
    <Container>
      <LeftInfo>
        <Click to="/home">
          <img src={Logo} alt="Logo da Coffe Break" />
        </Click>
      </LeftInfo>
      <RightInfo>
        {userIdentification !== "" ? <p>Bem vindo, {userIdentification}</p> : <></>}
        {userPhoto !== "" ? <img onClick={showMenuInfo} src={userPhoto} alt="" /> : <></>}
      </RightInfo>
      <InfoUsers menuInfo={menuInfo} setMenuInfo={setMenuInfo} />
    </Container>
  );
}

const Container = styled.div`
  background-color: #47362e;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const LeftInfo = styled.div`
  img {
    width: 90px;
    height: 90px;
  }
`;

const RightInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2vh;
  p {
    color: #ffffff;
    font-family: "Oregano";
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    margin-right: 10px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Click = styled(Link)`
  text-decoration: none;
`;
