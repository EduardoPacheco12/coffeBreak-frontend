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
        console.log("entrou");
        const status = error?.response.status;
        switch (status) {
          case 401:
            alert("Email or password is incorrect, please try again");
            setEmail("");
            setPassword("");
            break;
          case 422:
            alert("Please fill in all fields");
            break;
          case 500:
            alert("Server Error!!!");
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
    console.log("rodei");
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
