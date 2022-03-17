import React, { useEffect } from "react";
import "./Header.css";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import phoneHeader from "../../assets/phone-header-bg.png";
import { BsMouse } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>Specialist in</span>
            <span>Talent Acquisition</span>
            <span>And Management Consulting</span>
          </h1>
          <p className="u-text-small">
            Tafadzwa Consulting was sucessfully established in 2004 to bring together professionals dedicated to
            share common values of making a remarkable difference in the industry, offering all elements of our services into creating robust solution.
          </p>
          <div className="header-cta">
            <Button text={"Click Here"} btnClass={"btn-light"} href={"#features"} />
          </div>
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={phoneHeader} alt="phone" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;
