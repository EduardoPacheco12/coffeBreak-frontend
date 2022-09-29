import GlobalStyle from "../../assets/globalStyle";
import Logo from "../../assets/images/coffeBreak.png";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function FinishLogin(e) {
    e.preventDefault();
    const body = {
      email,
      password,
    };
  }
  //UI
  return (
    <All>
      <GlobalStyle />
      <Content>
        <Img>
          <img src={Logo} alt="Logo da Coffe Break" />
        </Img>
        <Forms onSubmit={FinishLogin}>
          <input
            type="email"
            placeholder="e-mail"
            disabled={loading ? true : false}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            type="password"
            placeholder="senha"
            max="20"
            disabled={loading ? true : false}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button type="submit" disabled={loading ? true : false}>
            {loading ? <ThreeDots color="#FFFFFF" height={80} width={80} /> : "Entrar"}
          </button>
        </Forms>
        <Click to="/sign-up">
          <BackRegister>Primeira vez por aqui? Crie uma conta</BackRegister>
        </Click>
      </Content>
    </All>
  );
}

const All = styled.div``;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  margin-bottom: 10vh;
  @media (max-width: 767px) {
    margin-bottom: 0;
  }
`;

const Img = styled.div`
  display: flex;
  justify-content: center;
  img {
    max-width: 325px;
    height: 325px;
  }
`;

const Forms = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 380px;
    height: 50px;
    margin-bottom: 14px;
    background: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 5px;
    font-family: "Oswald";
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    color: #bfa98e;
    padding-left: 15px;
    ::-webkit-input-placeholder {
      font-family: "Oswald";
      font-weight: 700;
      font-size: 22px;
      line-height: 33px;
      color: #bfa98e;
    }
  }
  button {
    width: 380px;
    height: 40px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8c501c;
    border: 1px solid #8c501c;
    border-radius: 5px;
    font-family: "Oswald";
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
    color: #ffffff;
    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 767px) {
    padding: 0 10vw;
    input {
      width: 100%;
      height: 55px;
    }
    button {
      width: 100%;
      height: 46px;
    }
  }
`;

const BackRegister = styled.p`
  padding: 0 75px;
  font-family: "Lato";
  text-align: center;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-decoration-line: underline;
  color: #ffffff;
`;

const Click = styled(Link)`
  text-decoration: none;
`;
