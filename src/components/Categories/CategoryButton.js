import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function CategoryButton({ name, id, type }) {
  const navigate = useNavigate();

  const get = () => {
    if (type === "book") {
      navigate(`/books/${id}`);
    }
    if (type === "drink") {
      navigate(`/drinks/${id}`);
    }
  };

  return <Button onClick={get}>{name}</Button>;
}

const Button = styled.button`
  width: 200px;
  height: 80px;
  margin-bottom: 10vh;
  font-family: "Oregano";
  font-size: 26px;
  background-color: #d5c1a8;
  border: 5px solid #d5c1a8;
  border-radius: 10px;
  color: #000000;
  font-weight: 700;
  &:hover {
    cursor: pointer;
    color: #ffffff;
  }
`;
