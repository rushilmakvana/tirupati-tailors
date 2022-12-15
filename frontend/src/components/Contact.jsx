import React, { useEffect } from "react";
import "../css/contact.css";
import "aos/dist/aos.css";
import Aos from "aos";
const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="contact">
      <h1 className="contact-h1" data-aos="fade-in">
        Any Queries ?
      </h1>
      <div className="contact-det" data-aos="fade-in">
        <div className="section">
          <h2 className="contact-h2">Email us on </h2>
          <h4 className="ch4">
            <div className="ic">
              <i className="fas fa-envelope"></i>&nbsp;
              <a
                className="l"
                href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkkJlTpDjfhwnfFzBsvJWDPhpjvLTcgggpvpjTRPZnzZPwCZQDjKrZXLtRWGLSXkNrfksq"
                target="_blank"
              >
                vashantmakvana1988@gmail.com
              </a>
            </div>
          </h4>
          <h4 className="ch4">
            <div className="ic">
              <i className="fas fa-envelope"></i>&nbsp;
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxGsVlPSHFlWSvCCKDPJcRmxsxpbnflbttfrrnSSZRXRBSnwwLTCpKDglxHqcnHRWMlqrW"
                className="l"
                target="_blank"
              >
                tirupatitailors@gmail.com
              </a>
            </div>
          </h4>
        </div>
        <div className="section">
          <h2 className="contact-h2">Whatsapp us on </h2>
          <h4 className="ch4">
            <div className="ic">
              <i className="fab fa-whatsapp"></i>&nbsp;
              <a
                href="https://wa.me/+919879130044"
                target="_blank"
                className="l"
              >
                +91 98791 30044
              </a>
            </div>
          </h4>
          <h4 className="ch4">
            <div className="ic">
              <i className="fab fa-whatsapp"></i>&nbsp;
              <a
                href="https://wa.me/+918849623752"
                target="_blank"
                className="l"
              >
                +91 88496 23752
              </a>
            </div>
          </h4>
        </div>
        <div className="section">
          <h2 className="contact-h2">Follow us on </h2>
          <h4 className="ch4">
            <div className="ic">
              <i className="fab fa-instagram"></i>&nbsp;
              <a
                href="https://www.instagram.com/tirupati_tailors_surat/"
                className="l"
              >
                instagram
              </a>
            </div>
          </h4>
          <h4 className="ch4">
            <div className="ic">
              <i className="fab fa-facebook"></i>&nbsp;
              <a
                href="https://www.facebook.com/vasant.makwana.3388"
                className="l"
              >
                facebook
              </a>
            </div>
          </h4>
        </div>
        <div className="section">
          <h2 className="contact-h2">
            <i className="fas fa-map-marker-alt"></i>&nbsp;Reach us
          </h2>
          <h4 className="ch4">
            <a
              href="https://www.google.com/maps/place/Tirupati+Ladies+Tailor/@21.2004186,72.8476555,16.84z/data=!4m12!1m6!3m5!1s0x3be04e55612a9bf7:0x7ad92cf1870775f8!2sTirupati+Ladies+Tailor!8m2!3d21.2014871!4d72.8498656!3m4!1s0x3be04e55612a9bf7:0x7ad92cf1870775f8!8m2!3d21.2014871!4d72.8498656"
              className="l"
              target="_blank"
            >
              Shop-No. 4, Tirupati Ladies Tailors, swastik Society, Near Radha
              Krishna Temple, L.H Road, Surat
            </a>
          </h4>
        </div>
      </div>
      <div className="footer">
        for website Development,&nbsp;<i className="fas fa-envelope"></i>&nbsp;
        <a
          style={{ color: "rgb(216,210,210)" }}
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfpsJDMjpZMLsHCVzPDxsQPMQrmqQLspXCtCPtwGVZqKCBrwGwGscpGDWdkTCzrcHrsrJB"
          target="_blank"
        >
          rushilmakvana@gmail.com
        </a>{" "}
        or &nbsp;<i className="fas fa-phone-alt"></i>&nbsp;
        <a
          href="https://wa.me/+918849623752"
          target="_blank"
          style={{ color: "rgb(216,210,210)" }}
        >
          +918849623752{" "}
        </a>
      </div>
    </div>
  );
};

export default Contact;
