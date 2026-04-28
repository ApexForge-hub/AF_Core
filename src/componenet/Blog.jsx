import React from "react";
import { IoIosSearch } from "react-icons/io";
import "./Blog.css";

const Blog = () => {
  return (
    <>
      <section>
        <div className="apexforge-blog">
          <h1>Apexforge Technologies Blog</h1>
          <p>
            Expert insights on web design, development, and digital marketing
            for businesses in New Delhi.
          </p>

          <form className="search-form">
            <input
              type="Text"
              className="search-input"
              placeholder="Search articles..."
            />
            <button type="Submit" className="Search-button">
              <IoIosSearch />
            </button>
          </form>
        </div>

        <div className="subscribe">
          <h3>Subscribe to Newsletter</h3>
          <p>Get the latest articles and insights delivered to your inbox.</p>
          <input
            type="text"
            className="submit-email"
            id="email"
            placeholder="Your email address"
            required
          />
          <br/>
          <button type="submit"  className="click">Subscribe</button>
          <p >No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  );
};

export default Blog;
