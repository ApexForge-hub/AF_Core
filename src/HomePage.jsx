import "./HomePage.css";
import { Link } from "react-router-dom";
import Home from "./componenet/Home";

function HomePage() {
  return (
    <div className="home-page">
      <header className="header">
        <div className="logo">
          <span className="logo-apex">apex</span>
          <span className="logo-forge">forge</span>
        </div>

        <div className="navbar">
          <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <button className="contactNo">
          <a href="/contact">+91 7371021846</a>
        </button>

        {/* search and button code */}
        <form className="search-form">
          <input
            type="Text"
            className="search-input"
            placeholder="Search..."
            />
            <button type="Submit" className="Search-button">Search</button>
        </form>
      </header>

      <main className="hero"></main>

      <Home/>
      
      <footer className="footer">
        <div>
          <div></div>
          <div className="footerServices">
            <h4>Our Services</h4>
            <ul>
              <a href="/services">
                <span>Web Development</span>
                <span>
                  <p>Custome websites & applications</p>
                </span>
              </a>

              <li>
                <a href="/services">Software Solutions</a>
              </li>
              <li>
                <a href="/services">Digital Marketing</a>
              </li>
              <li>
                <a href="/services">E-Commerce Solution</a>
              </li>
              <li>
                <a href="/services">Mobile Application</a>
              </li>
            </ul>
          </div>

          <div className="quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/case-studies">Case Studies</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <p>&copy; 2026 apexforge. All Right Reserved </p>
            <p>Web Design & Development Company in New Delhi</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
