import "../css/blouse.css";
import "../components/ui/carditem.css";
import Items from "./ui/Items";

const Blouse = () => {
  return <Items type="Blouse" fetchUrl="http://localhost:3000/getBlouses" />;
};

export default Blouse;
