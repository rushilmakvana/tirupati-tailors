import "../css/blouse.css";
import Items from "./ui/Items";

const Kurti = () => {
  return <Items type="Kurti" fetchUrl="http://localhost:3000/getKurtis" />;
};

export default Kurti;
