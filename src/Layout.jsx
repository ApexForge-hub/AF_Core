import "./Layout.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
// import Home from "./componenet/Home";
import { VscLocation } from "react-icons/vsc";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";

function Layout() {
   const [isServicesOpen, setIsServicesOpen] = useState(false);

  const servicesList = [
    { name: "Web Design & Development", description: "Custom websites & applications", link: "/dev" },
    { name: "Software Solutions", description: "Tailored business software", link: "/so" },
    { name: "Digital Marketing", description: "SEO & online presence", link: "/market" },
    { name: "E-Commerce Solutions", description: "Online stores & platforms", link: "/solution" },
    { name: "Mobile Applications", description: "iOS & Android development", link: "/application" },
  ];


  return (
    <>
      <header className="header">
        <div className="logo">
          <span className="logo-apex">apex</span>
          <span className="logo-forge">forge</span>
        </div>

        <div className="navbar">
          <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <div 
              className="services-dropdown-container"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="services-btn">
                Services <MdKeyboardArrowDown className={`arrow-icon ${isServicesOpen ? 'open' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="services-dropdown">
                  {servicesList.map((service, index) => (
                    <Link 
                      key={index}
                      to={service.link}
                      className="service-item"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="service-name">{service.name}</div>
                      <div className="service-description">{service.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <button className="contactNo">
          <a href="/contact" className="number">
            +91 7371021846
          </a>
        </button>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footerAddress">
            <h4>apexforge</h4>
            <h5>
              <span>
                <VscLocation />
              </span>
              Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi –
              110006, India
            </h5>
            <h5>
              <IoCallOutline /> +91 7371021846
            </h5>
            <h5>
              <MdOutlineMail /> apexforge@gmail.com
            </h5>
            <div className="social-icons">
              <button>
                <BiLogoFacebookSquare />
              </button>
              <button>
                <FaInstagram />
              </button>
              <button>
                <FaSquareXTwitter />
              </button>
            </div>
          </div>
          <div className="footerServices">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="/dev"    className="web">Web Development</a>
                <p>Custome websites & applications</p>
              </li>

              <li>
                <a href="/so"   className="software">Software Solutions</a>
                <p>Tailored business software</p>
              </li>
              <li>
                <a href="/market"  className="digital">Digital Marketing</a>
                <p>SEO & online presence</p>
              </li>
              <li>
                <a href="/solution"  className="e-commerce">E-Commerce Solution</a>
                <p>Online stores & platforms</p>
              </li>
              <li>
                <a href="/application"   className="mobile">Mobile Application</a>
                <p>iOS & Android Development</p>
              </li>
              <li>
                <a href="/ss"  className="seo">SEO Services</a>
                <p>Improve search rankings</p>
              </li>
              <li>
                <a href="/design"   className="ux">UX/UI Design</a>
                <p>Used experience design</p>
              </li>
            </ul>
          </div>

          <div className="quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/" className="home">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="about">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="services">
                  Services
                </a>
              </li>
              <li>
                <a href="/Projects" className="project">
                  Projects
                </a>
              </li>
              <li>
                <a href="/blog" className="blog">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 apexforge. All Right Reserved </p>
          <p>Web Design & Development Company in New Delhi</p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
