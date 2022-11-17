import styled from "styled-components";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GlobalStyle from "../../assets/globalStyle";
import Logo from "../../assets/images/coffeBreak.png";
import UserContext from "../../contexts/UserContext";
import Image from "../../components/Auth/Image";
import AuthInput from "../../components/Auth/AuthInput";
import AuthButton from "../../components/Auth/AuthButton";
import AuthSwitchPage from "../../components/Auth/AuthSwitchPage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);

  const FinishLogin = (e) => {
    e.preventDefault();
    setLoad(true);
    const body = {
      email,
      password,
    };
    const url = `${process.env.REACT_APP_API_BASE_URL}/coffebreak/sign-in`;

    axios
      .post(url, body)
      .then((res) => {
        setUserData(res.data);
        setLoad(false);
        navigate("/home");
      })
      .catch((err) => {
        setLoad(false);
        const status = err?.response.status;
        switch (status) {
          case 401:
            alert("Email ou senha incorreta, tente novamente");
            setLoad(false);
            break;
          case 404:
            alert("Email ou senha incorreta, tente novamente");
            setLoad(false);
            break;
          case 422:
            alert("Por favor preencha os campos corretamente");
            setLoad(false);
            break;
          case 500:
            alert("Erro de servidor!!!");
            setEmail("");
            setPassword("");
            setLoad(false);
            break;
          default:
            setLoad(false);
            break;
        }
      });
  };

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
