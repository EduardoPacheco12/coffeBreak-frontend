import styled from "styled-components";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GlobalStyle from "../../assets/globalStyle";
import Logo from "../../assets/images/coffeBreak.png";
import UserContext from "../../contexts/UserContext";
import Image from "../../components/Auth/Image";
import AuthInput from "../../components/Auth/AuthInput";
import AuthButton from "../../components/Auth/AuthButton";
import AuthSwitchPage from "../../components/Auth/AuthSwitchPage";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);
  const { token } = userData;

  function FinishLogin(e) {
    e.preventDefault();
    setLoad(true);
    const body = {
      email,
      password,
    };
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `${process.env.REACT_APP_API_BASE_URL}/coffebreak/sign-in`;

    axios
      .post(url, body, auth)
      .then((res) => {
        const userProfile = JSON.stringify(res.data);
        localStorage.setItem("userCoffeBreak", userProfile);
        setLoad(false);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <GlobalStyle />
      <Content>
        <Image logo={Logo} />
        <Forms onSubmit={FinishLogin}>
          <AuthInput type="email" placeholder="e-mail" load={load} setVariable={setEmail} variable={email} />
          <AuthInput type="password" placeholder="senha" load={load} setVariable={setPassword} variable={password} />
          <AuthButton load={load} text="Entrar" />
          <Click to="/sign-up">
            <AuthSwitchPage>Primeira vez por aqui? Crie uma conta</AuthSwitchPage>
          </Click>
        </Forms>
      </Content>
    </>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  margin-bottom: 10vh;
  @media (max-width: 767px) {
    margin-bottom: 0;
  }
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    padding: 0 10vw;
  }
`;

const Click = styled(Link)`
  text-decoration: none;
`;
