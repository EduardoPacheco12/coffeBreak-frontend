import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GlobalStyle from "../../assets/globalStyle";
import Logo from "../../assets/images/coffeBreak.png";
import Image from "../../components/Auth/Image";
import AuthInput from "../../components/Auth/AuthInput";
import AuthButton from "../../components/Auth/AuthButton";
import AuthSwitchPage from "../../components/Auth/AuthSwitchPage";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const FinishRegister = (e) => {
    e.preventDefault();
    setLoad(true);
    const body = {
      email,
      password,
      name: username,
      pictureUrl,
    };
    const url = `${process.env.REACT_APP_API_BASE_URL}/coffebreak/sign-up`;

    axios
      .post(url, body)
      .then((res) => {
        setLoad(false);
        navigate("/sign-in");
      })
      .catch((err) => {
        const status = err?.response.status;
        switch (status) {
          case 409:
            alert("Este e-mail já existe, tente novamente");
            setUsername("");
            setEmail("");
            setPassword("");
            setPictureUrl("");
            setLoad(false);
            break;
          case 422:
            alert("Por favor preencha os campos corretamente");
            setLoad(false);
            break;
          case 500:
            alert("Erro de servidor!!!");
            setUsername("");
            setEmail("");
            setPassword("");
            setPictureUrl("");
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
        <Forms onSubmit={FinishRegister}>
          <AuthInput type="email" placeholder="e-mail" load={load} setVariable={setEmail} variable={email} />
          <AuthInput type="password" placeholder="senha" load={load} setVariable={setPassword} variable={password} />
          <AuthInput type="username" placeholder="nome" load={load} setVariable={setUsername} variable={username} />
          <AuthInput type="url" placeholder="foto de perfil" load={load} setVariable={setPictureUrl} variable={pictureUrl} />
          <AuthButton load={load} text="Cadastrar" />
          <Click to="/sign-in">
            <AuthSwitchPage>Já está cadastrado? Faça o login</AuthSwitchPage>
          </Click>
        </Forms>
      </Content>
    </>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10vh;
  @media (max-width: 767px) {
    margin-bottom: 5vh;
    margin-bottom: 5vh;
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
