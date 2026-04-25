import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImageSlider.css";
import { useRef } from "react";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";

function ImageSlider() {
  const swiperRef = useRef(null);

  const slider = [
    {
      image: slide1,
      title: "Innovating Web Development ",
      description:
        "Build scalable and high-performance web applications with our expert development team using cutting-edge technologies. Perfect for small and medium businesses across India.",
    },
    {
      image: slide2,
      title: "Transforming Ideas into Reality with ApexForge",
      description:
        "At ApexForge, we specialize in transforming your ideas into reality. Our team of experts is committed to bringing your vision to life through innovative solutions and cutting-edge technology, ensuring your success in the digital world.",
    },
    {
      image: slide3,
      title: "Innovate, Create, Succeed with ApexForge",
      description:
        "At ApexForge, we believe in the power of innovation to drive success. Our team is dedicated to creating cutting-edge solutions that help you innovate, create, and succeed in the ever-evolving digital landscape.",
    },
    {
      image: slide4,
      title: "Your Success, Our Commitment at ApexForge",
      description:
        "At ApexForge, your success is our commitment. We are dedicated to providing innovative solutions and expert guidance to help you achieve your goals and thrive in the digital world.",
    },
  ];
  return (
    <div className="slider-container">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="image-slider"
      >
        {slider.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={slide.image} alt={slide.title} />
              <div className="text-overlay">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <div className="button-group">
                  <button className="btn btn-primary">Get Started</button>
                  <button className="btn btn-secondary">Our Services →</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrow Buttons */}
      <div className="custom-arrows">
        <button
          className="arrow-btn arrow-left"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          ←
      
        </button>
        <button
          className="arrow-btn arrow-right"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          →
        </button>
      </div>
    </div>
  );
}
export default ImageSlider;
