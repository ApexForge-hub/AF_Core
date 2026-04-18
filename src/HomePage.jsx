import "./HomePage.css";
import ImageSlider from "./componenet/ImageSlider";
function HomePage() {
  return (
    <main>
      <ImageSlider />
      <div className="home-page">
         <h1>Welcome to ApexForge</h1>
      <p>Your trusted partner in software development and IT solutions.</p>
      <a href="/services" className="cta-button">Explore Our Services</a>
    </div>
    </main>
  );
}

export default HomePage;