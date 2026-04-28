import React from "react";
import "./Projects.css";

const CaseStudies = () => {
  return (
    <section>
      <div className="our-project">
        <h1>Our Projects</h1>
        <p>
          Explore our recent projects and see how we deliver exceptional digital
          solutions for businesses across Srinagar, Jammu, and Kashmir.
        </p>
      </div>

      <div className=" option">
        <div> <button  className="button1"> All </button> </div>
        <div> <button  className="button2"> Web Design </button> </div>
        <div> <button  className="button3"> Mobile App </button> </div>
        <div> <button  className="button4"> E-commerce </button> </div>
        <div> <button  className="button5"> IoT </button> </div>
        <div> <button  className="button6"> Web Application </button> </div>
        <div> <button  className="button7"> Software Solution </button> </div>
        
      </div>

      <div className="information">
      
          <div  className="completed">
            {" "}
            <span>150+</span> <p>Projects Completed</p>
          </div>
          <div  className="members">
            {" "}
            <span>45+</span> <p>Expert Team Members</p>
          </div>
        
      
          <div  className=" satisfaction">          "
            {" "}
            <span>98%</span> <p>Client Satisfaction</p>
          </div>
          <div  className=" experience">
            {" "}
            <span>10+</span> <p>Years of Experience</p>
          </div>
        
      </div>

      <div className=" project-bottom">
        <h2> Ready to start your project with us?</h2>
        <p>
          Contact us today to discuss your project requirements and see how
          NetForge Technologies can help you achieve your business goals in
          Srinagar, Jammu, and Kashmir.
        </p>
        <a href="/project" className="touch-button">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default CaseStudies;
