import { useNavigate } from "react-router-dom";

export default function DrinkCategoryButton(props) {
  const navigate = useNavigate();

  function getDrinks() {
    navigate(`/drinks/${props.id}`);
  }

  return <button onClick={getDrinks}>{props.name}</button>;
}
