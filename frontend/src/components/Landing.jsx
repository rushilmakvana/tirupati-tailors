import React, { Fragment, useEffect, useState } from "react";
import Contact from "./Contact";
import Designs from "./Designs";
import Header from "./Header";
import Home from "./Home";
import ScaleLoader from "react-spinners/ScaleLoader";
const Landing = () => {
  const [load, setload] = useState(true);
  const loading = {
    display: "flex",
    width: "100%",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(34, 34, 34)",
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setload(false);
    }, 3333);

    return () => clearTimeout(timeout);
  }, []);

  if (load)
    //  {
    return <ScaleLoader style={loading} color="rgb(216,210,210)"></ScaleLoader>;
  // } else {
  return (
    <Fragment>
      <Header isItem={false} />
      <Home />
      <Designs />
      <Contact />
    </Fragment>
  );
  // }
};

export default Landing;
