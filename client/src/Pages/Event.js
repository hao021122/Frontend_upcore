import React, { useState } from "react";
import "../App.css";
import Back from "../Components/back";
import eventImage from "../assets/event.svg";
import Footer from "../Components/Footer";

export default function Event() {
  const slides = [
    {
      title: "Slide 1",
      description: "This is the first slide.",
      imageUrl: "https://example.com/slide1.jpg",
    },
    {
      title: "Slide 2",
      description: "This is the second slide.",
      imageUrl: "https://example.com/slide2.jpg",
    },
    // Add more slides here...
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const slide = slides[currentSlide];
  return (
    <div className="center">
      <div className="header">
        <div className="first-row">
          <Back />
        </div>
        <div className="second-row">
          <span className="icon">
            <img className="icon-image" src={eventImage} />
          </span>
          <span className="title">Latest Event</span>
        </div>
      </div>

      <div className="box">
        <div className="content">
          <h2>{slide.title}</h2>
          <img src={slide.imageUrl} alt={slide.title} />
          <p>{slide.description}</p>

          <button onClick={goToPrevSlide}>Previous</button>
          <button onClick={goToNextSlide}>Next</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
