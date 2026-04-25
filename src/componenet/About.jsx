import React from "react";
import "./About.css";
import Code from "../assets/code.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Content */}
        <div className="about-left">
          <h1 className="about-title">About apexForge</h1>
          <h2 className="about-subtitle">
            Leading Web Design & Development Company in New Delhi
          </h2>

          <p className="about-text">
            Founded in New Delhi in 2026, apexForge is a leading web design and
            digital marketing agency dedicated to helping businesses establish a
            powerful online presence across New Delhi and beyond.
          </p>

          <p className="about-text">
            We specialize in web design and development, software development,
            and digital marketing solutions. Our team of 45+ skilled
            professionals combines technical expertise with creative innovation
            to deliver results that drive business growth.
          </p>

          <button className="about-btn">Get in Touch →</button>
        </div>

        {/* Right Image */}
        <div className="about-right">
          <img src={Code} alt="About apexForge" />
        </div>
      </div>
    </section>
  );
};

export default About;
