// import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import "../../css/blouse.css";
import "../../components/ui/CardItem";
// import CloseIcon from "@material-ui/icons/Close";
import BeatLoader from "react-spinners/BeatLoader";
import CardItem from "../ui/CardItem";
import Header from "../Header";
import CartContext from "../context/cartContext";

const Items = (props) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(props.fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
    // axios.get('http://localhost:3000/getBlouses')
  }, []);

  const loading = {
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "-1",
    display: "flex",
    width: "100%",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(34, 34, 34)",
  };
  return (
    <>
      <Header isItem={true} />
      {!data && (
        <BeatLoader
          style={loading}
          size={15}
          color="rgb(216,210,210)"
        ></BeatLoader>
      )}
      <div className="products">
        {data &&
          data.map((e) => (
            <Fragment key={e.id}>
              <CardItem {...e} type={props.type} />
            </Fragment>
          ))}
      </div>
    </>
  );
  // }
};

export default Items;
