import React, { useState } from "react";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons for navigation

const HomePage = () => {
    const [roomSearchResults, setRoomSearchResults] = useState([]);

    // Function to handle search results
    const handleSearchResult = (results) => {
        setRoomSearchResults(results);
    };

    // Custom Previous Arrow
    const PrevArrow = ({ onClick }) => (
        <div className="custom-arrow left-arrow" onClick={onClick}>
            <FaChevronLeft />
        </div>
    );

    // Custom Next Arrow
    const NextArrow = ({ onClick }) => (
        <div className="custom-arrow right-arrow" onClick={onClick}>
            <FaChevronRight />
        </div>
    );

    // Slider settings
    const settings = {
        dots: false,  // Hide dots
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />, 
        nextArrow: <NextArrow />, 
    };

    return (
        <div className="home">
            {/* HEADER / CAROUSEL SECTION */}
            <section>
                <header className="header-banner">
                    <Slider {...settings} className="carousel">
                        <div>
                            <img src="./assets/images/hotel.jpg" alt="Phegon Hotel" className="header-image" />
                        </div>
                        <div>
                            <img src="./assets/images/carousel3.jpg" alt="Hotel View" className="header-image" />
                        </div>
                        <div>
                            <img src="./assets/images/carousel2.jpg" alt="Luxury Room" className="header-image" />
                        </div>
                        <div>
                            <img src="./assets/images/carousel4.jpg" alt="Resort Area" className="header-image" />
                        </div>
                    </Slider>
                    <div className="animated-texts overlay-content">
                        <h1>
                            Welcome to <span className="phegon-color">RoomVista</span>
                        </h1><br />
                        <h3>Step into a haven of comfort and care</h3>
                    </div>
                </header>
            </section>

            <h2 className="home-services">Services at <span className="phegon-color">RoomVista</span></h2>

            {/* SERVICES SECTION */}
            <section className="service-section">
                <div className="service-card">
                    <img src="./assets/images/ac.png" alt="Air Conditioning" />
                    <div className="service-details">
                        <h3 className="service-title">Air Conditioning</h3>
                        <p className="service-description">Stay cool and comfortable throughout your stay with our individually controlled in-room air conditioning.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/mini_bar.png" alt="Mini Bar" />
                    <div className="service-details">
                        <h3 className="service-title">Mini Bar</h3>
                        <p className="service-description">Enjoy a convenient selection of beverages and snacks stocked in your room's mini bar with no additional cost.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/parking.png" alt="Parking" />
                    <div className="service-details">
                        <h3 className="service-title">Parking</h3>
                        <p className="service-description">We offer on-site parking for your convenience. Please inquire about valet parking options if available.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/wifi.png" alt="WiFi" />
                    <div className="service-details">
                        <h3 className="service-title">WiFi</h3>
                        <p className="service-description">Stay connected throughout your stay with complimentary high-speed Wi-Fi access available in all guest rooms and public areas.</p>
                    </div>
                </div>
            </section>

            {/* AVAILABLE ROOMS SECTION */}
            <section>
            </section>
        </div>
    );
};

export default HomePage;
