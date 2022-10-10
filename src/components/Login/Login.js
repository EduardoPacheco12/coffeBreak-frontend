import GlobalStyle from "../../assets/globalStyle";
import Logo from "../../assets/images/coffeBreak.png";
import { ThreeDots } from "react-loader-spinner";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { All, Content, Img, Forms, BackRegister, Click } from "./styles";
import { useAxios } from "../../hooks/useAxios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { response, error, loading, fetchData } = useAxios();
  const [load, setLoad] = useState(false);

  function handleError() {
    if (!loading) {
      if (error !== "") {
        const status = error?.response.status;
        switch (status) {
          case 401:
            alert("O e-mail ou a senha estão incorretos, tente novamente");
            setEmail("");
            setPassword("");
            break;
          case 404:
            alert("O e-mail ou a senha estão incorretos, tente novamente");
            setEmail("");
            setPassword("");
            break;
          case 422:
            alert("Por favor preencha os campos corretamente");
            break;
          case 500:
            alert("Erro do servidor!!!");
            setEmail("");
            setPassword("");
            break;
          default:
            break;
        }
      }
    }
  }

  useEffect(() => {
    handleError();
    if (response !== undefined) {
      const userProfile = JSON.stringify(response);
      localStorage.setItem("userCoffeBreak", userProfile);
      setLoad(false);
      navigate("/home");
    }
  }, [response, loading]);

  function FinishLogin(e) {
    e.preventDefault();
    setLoad(true);
    const body = {
      email,
      password,
    };
    fetchData({
      method: "POST",
      url: "/coffebreak/sign-in",
      headers: {},
      data: body,
    });
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
            disabled={load ? true : false}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            type="password"
            placeholder="senha"
            max="20"
            disabled={load ? true : false}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button type="submit" disabled={load ? true : false}>
            {load ? <ThreeDots color="#FFFFFF" height={80} width={80} /> : "Entrar"}
          </button>
        </Forms>
        <Click to="/sign-up">
          <BackRegister>Primeira vez por aqui? Crie uma conta</BackRegister>
        </Click>
      </Content>
    </All>
  );
}
