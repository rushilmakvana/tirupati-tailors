import Aos from "aos";
import React, { useEffect } from "react";
import "../css/home.css";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    const count = document.querySelector(".count");
    count.innerHTML = 0;
    const updatedata = () => {
      const target = 1000;
      const incre = target / 33;
      const s = +count.innerHTML;
      if (s < target) {
        count.innerHTML = Math.round(s + incre);
        setTimeout(updatedata, 40);
      } else {
        count.innerHTML = 1000;
      }
    };
    setTimeout(updatedata, 1000);
    // Aos.init({ duration: 1600 });
  }, []);

  return (
    <>
      <div id="home">
        <div className="bg" data-aos="fade-zoom-in" data-aos-duration="600">
          <div className="sm" data-aos="fade-up">
            <h1 className="hh1" data-aos="fade-in">
              Your welcome...
            </h1>
            <div className="para" data-aos="fade-in">
              <h3>
                We make variety of design patterns, Just choose a Design of your
                choice.
              </h3>
            </div>
            <br />
            <div className="inc" data-aos="fade-in">
              <h2 className="count" data-aos="fade-in"></h2>
              <h4> + Designs</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="up-btn">
        <div
          className="arrow"
          onClick={() => {
            // window.addEventListener("scroll", () => {
            //   console.log("called");
            //   if (window.scrollY > 0) {
            //     window.scrollY = 0;
            //   }
            // });
            window.location.href = "#";
          }}
        >
          <i className="fas fa-arrow-up"></i>
        </div>
      </div>
    </>
  );
};

export default Home;
