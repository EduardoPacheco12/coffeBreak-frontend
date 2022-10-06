import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import DrinkContext from "../../contexts/DrinkContext";

export default function DrinkCategoryButton(props) {
  const navigate = useNavigate();
  const { setDrinkCategoryNumber } = useContext(DrinkContext);

  function getDrinks() {
    setDrinkCategoryNumber(props.id);
    navigate(`/drinks/${props.id}`);
  }

  return <button onClick={getDrinks}>{props.name}</button>;
}
