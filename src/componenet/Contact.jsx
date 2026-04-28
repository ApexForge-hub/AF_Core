import React from "react";
import { VscLocation } from "react-icons/vsc";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
// import "./Contact.css";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-text">
          Have a question or want to work with us? Fill out the form below and
          we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="div-collection">
        <div className="contact-form-container">
          <form className="contact-form">
            <h2  className="head">Send Us a Message</h2><br/>
            <label htmlFor="name"  >Your Name</label><br/>
            <input type="text" id="name" placeholder="Your Name" required /><br/>
            <label htmlFor="email">Your Email</label><br/>
            <input type="email" id="email" placeholder="Your Email" required /><br/>
            <label htmlFor="Phone">Phone Number</label><br/>
            <input type="phone" id="Phone Number" placeholder="+91 9457816472" required /><br/>
            <label htmlFor="Phone">Subject</label><br/>
            <input type="Subject" id="Subject" placeholder="Website Development Inquiry" required /><br/>
            <label htmlFor="message">Your Message</label><br/>
            <textarea
              id="message"
              placeholder="Your Message"
              required
            ></textarea><br/>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="div2">
          <div className="contact-info">
            <h3>Our Contact Information</h3>
            <h3>
              <span>
                <VscLocation />
              </span>
              Address
            </h3>
            <p>
              Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi –
              110006, India
            </p>
            <h3>
              <span>
                <MdOutlineMail />
              </span>
              Email
            </h3>
            <p> apexforge03@gmail.com</p>
            <h3>
              <span>
                <IoCallOutline />
              </span>
              Phone
            </h3>
            <p>+91 9875604360</p>
          </div>

          <div  className="business">
            <h3>Business Hours</h3>
            <div>
              <p>
              <span>Monday - Friday</span> <span>9:00 AM - 6:00 PM</span>
              </p>
            </div>
            <div>
              <p>
              <span>Saturday</span> <span>10:00 AM - 4:00 PM</span>
              </p>
            </div>
            <div>
              <p>
              <span>Sunday</span> <span>Closed</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div  className="need">
        <h3   className="help">Need help with your project?</h3>
        <p  className="line">
          Get in touch with our team today to discuss your requirements and see
          how we can help bring your vision to life.
        </p>
        <div >
          <a href="/server"  className="call-button" >Call Now</a>
          <a href="/server"  className="mail-button">Email us</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
