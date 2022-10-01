import GlobalStyle from "../../assets/globalStyle";
import Logo from "../../assets/images/coffeBreak.png";
import { ThreeDots } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import { All, Content, Img, Forms, BackLogin, Click } from "./styles";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const { response, error, loading, fetchData } = useAxios();
  const [load, setLoad] = useState(false);

  function handleError() {
    if (!loading) {
      if (error?.response.status) {
        const status = error?.response.status;
        switch (status) {
          case 409:
            alert("This email already exists, please try again");
            setUsername("");
            setEmail("");
            setPassword("");
            setPictureUrl("");
            setLoad(false);
            break;
          case 422:
            alert("Please fill in all fields");
            setLoad(false);
            break;
          case 500:
            alert("Server Error!!!");
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
      }
    }
  }

  useEffect(() => {
    handleError();
    if (response !== undefined) {
      setLoad(false);
      navigate("/sign-in");
    }
  }, [response, loading]);

  function FinishRegister(e) {
    e.preventDefault();
    setLoad(true);
    const body = {
      email,
      password,
      name: username,
      pictureUrl,
    };
    fetchData({
      method: "POST",
      url: "/coffebreak/sign-up",
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
        <Forms onSubmit={FinishRegister}>
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
          <input
            type="username"
            placeholder="nome"
            disabled={load === true ? true : false}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          <input
            type="url"
            placeholder="foto de perfil"
            disabled={load === true ? true : false}
            onChange={(e) => setPictureUrl(e.target.value)}
            value={pictureUrl}
            required
          />
          <button type="submit" disabled={load ? true : false}>
            {load ? <ThreeDots color="#FFFFFF" height={80} width={80} /> : "Cadastrar"}
          </button>
        </Forms>
        <Click to="/sign-in">
          <BackLogin>Já está cadastrado? Faça o login</BackLogin>
        </Click>
      </Content>
    </All>
  );
}
