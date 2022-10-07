import { useNavigate } from "react-router-dom";

export default function BookCategoryButton(props) {
  const navigate = useNavigate();

  function getBooks() {
    navigate(`/books/${props.id}`);
  }

  return <button onClick={getBooks}>{props.name}</button>;
}
