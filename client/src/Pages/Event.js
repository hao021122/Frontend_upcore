import React, { useState } from "react";
import "../App.css";
import Back from "../Components/back";
import eventImage from "../assets/event.svg";
import Bronze from "../assets/bronze.svg";
import Sliver from "../assets/silver.svg";
import Gold from "../assets/gold.svg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Footer from "../Components/Footer";

export default function Event() {
  const slides = [
    {
      title: "Slide 1",
      description: "This is the first slide.",
      imageUrl: Bronze,
      alt: "Slider 1",
    },
    {
      title: "Slide 2",
      description: "This is the second slide.",
      imageUrl: Sliver,
      alt: "Slider 2",
    },
    {
      title: "Slide 3",
      description: "This is the second slide.",
      imageUrl: Gold,
      alt: "Slider 3",
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

      <div className="carousels">
        <div className="content">
          <div onClick={goToPrevSlide}>
            <ArrowBackIosIcon className="arrow arrow-left" />
          </div>
          <img className="big-image" src={slide.imageUrl} alt={slide.title} />
          <div onClick={goToNextSlide}>
            <ArrowBackIosIcon className="arrow arrow-right" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
