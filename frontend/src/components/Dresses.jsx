import "../css/blouse.css";
import "./ui/carditem.css";
import Items from "./ui/Items";

const Dresses = () => {
  return <Items type="Dress" fetchUrl="http://localhost:3000/getDresses" />;
};

export default Dresses;
