import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <button type="button" onClick={handleClick}>
      Regresar
    </button>
  );
}
export default HomeButton;