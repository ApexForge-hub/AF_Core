import "./HomePage.css";
import ImageSlider from "./componenet/ImageSlider";
import { GoArrowRight } from "react-icons/go";
import { FiLayout } from "react-icons/fi";
import { FiLayers } from "react-icons/fi";
import { IoIosCode } from "react-icons/io";
import { GoDatabase } from "react-icons/go";
function HomePage() {
  return (
    <main>
      <ImageSlider />

      <section className="section1">
        <h2  className="section1-title">Premier Web Design and Digital Marketing in New Delhi</h2>
        <p className="section1-p">
          Trusted by small and medium businesses across New Delhi and throughout
          India
        </p>
        <div className="section1-div">
          <div className="section1-div1">
            <p> New Delhi </p>
          </div>
          <div className="section1-div2">
            <p> All India</p>
          </div>
          <div className="section1-div3">
            <p> Outside India </p>
          </div>
        </div>
      </section>

      <section className="section2">
        <h2  className="title">Our Core Services</h2>
        <p className="section2-p">
          {" "}
          We offer a comprehensive range of digital services to help your
          business grow and succeed in today's competitive market
        </p>
        <div className="section2-div1">
          <div className="web-design">
            <div>
              {" "}
              <FiLayout className="layout" />{" "}
            </div>
            <h3 classNmae="title1">Website Designing</h3>
            <p className="p1">
              We create professional, responsive websites that showcase your
              brand and drive business growth.
            </p>
            <a href="#">
              Learn More
              <GoArrowRight />
            </a>
          </div>

          <div className="Design">
            <div>
              {" "}
              <FiLayers className="layers" />{" "}
            </div>
            <h2>UX/UI Design</h2>
            <p>
              Create intuitive user experiences that enhance usability and
              customer satisfaction for your digital products.
            </p>
            <a href="server">
              Learn More
              <GoArrowRight />
            </a>
          </div>

          <div className="Services">
            <div>
              {" "}
              <IoIosCode className="code" />{" "}
            </div>
            <h2>SEO Services</h2>
            <p>
              Improve your search engine rankings and drive more organic traffic
              to your website with our SEO strategies.
            </p>
            <a href="server">
              Learn More
              <GoArrowRight />
            </a>
          </div>

          <div className="Digital_Marketing">
            <div>
              {" "}
              <GoDatabase className="Database" />{" "}
            </div>
            <h3>Digital Marketing</h3>
            <p>
              Comprehensive digital marketing solutions to increase brand
              visibility and reach your target audience effectively.
            </p>
            <a href="#">
              Learn More
              <GoArrowRight />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
