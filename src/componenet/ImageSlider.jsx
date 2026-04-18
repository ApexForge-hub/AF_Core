import { swiper, swiperSlide } from "swiper/react";
import { navigation, pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImageSlider.css";

function ImageSlider() {
    const slider = [
        {
            image: "slider1.jpg",
            tital: "Empowering Your Digital Journey with ApexForge",
            description: "At ApexForge, we are dedicated to empowering your digital journey. With our innovative solutions and expert team, we help you navigate the ever-evolving digital landscape, ensuring your success in the online world."
        },
        {
            image: "slider2.jpg",
            tital: "Transforming Ideas into Reality with ApexForge",
            description: "At ApexForge, we specialize in transforming your ideas into reality. Our team of experts is committed to bringing your vision to life through innovative solutions and cutting-edge technology, ensuring your success in the digital world."

        },
        {
            image: "slider3.jpg",
            tital: "Innovate, Create, Succeed with ApexForge",
            description: "At ApexForge, we believe in the power of innovation to drive success. Our team is dedicated to creating cutting-edge solutions that help you innovate, create, and succeed in the ever-evolving digital landscape."

        },
        {
            image: "slider4.jpg",
            tital: "Your Success, Our Commitment at ApexForge",
            description: "At ApexForge, your success is our commitment. We are dedicated to providing innovative solutions and expert guidance to help you achieve your goals and thrive in the digital world."

        }
        
    ];
    return (
        <swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
            className="image-slider"

        >
            {slider.map((slide, index) => (
                <swiperSlide key={index}>
                    <div className="slide-content">
                        <img src={slide.image} alt={slider.tital} />
                        <div className="text-overlay">
                            <h2>{slide.tital}</h2>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                </swiperSlide>
            ))}
        </swiper>

    );
}
export default ImageSlider;