import "../css/blouse.css";
import Items from "./ui/Items";

const Gown = () => {
  return <Items type="Gown" fetchUrl="http://localhost:3000/getGowns" />;
};

export default Gown;
