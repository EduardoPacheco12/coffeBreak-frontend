import styled from "styled-components";

export default function AuthInput({ type, placeholder, load, setVariable, variable }) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      disabled={load ? true : false}
      onChange={(e) => setVariable(e.target.value)}
      value={variable}
      required
    />
  );
}

const Input = styled.input`
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
  @media (max-width: 767px) {
    width: 100%;
    height: 55px;
  }
`;
