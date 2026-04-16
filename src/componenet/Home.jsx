import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <main className="homeMain">
      <div className="home-style">Welcome to Apexforge</div>

      <div className="body">
        <h3 className="goal">Website Goal</h3>
        <h5>The website should help visitors:</h5>
        <p></p>

        <ol>
          <li> Understand your services quickly</li>
          <li> Trust your expertise</li>
          <li> Explore solutions</li>
          <li> Contact you or book a consultation</li>
        </ol>
      </div>
    </main>
  );
};

export default Home;
