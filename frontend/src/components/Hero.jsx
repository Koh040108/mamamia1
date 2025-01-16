import React, { useState, useEffect } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md'; // Material UI arrow icons

const Hero = () => {
  const slides = [
    {
      img: "/crochet_corousel.jpg",
      alt: "Crochet",
      caption: "Crochet",
      description: "We focus on Craftmanship",
      link: "/page1",
    },
    {
      img: "/soap_corousel.jpg",
      alt: "Second slide",
      caption: "Soap",
      description: "Your skin solution",
      link: "/page2",
    },
    {
      img: "/candle_corousel.jpg",
      alt: "Third slide",
      caption: "Candle",
      description: "Aromatheraphy Scented Canlde",
      link: "/page3",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 cursor-pointer relative"
            onClick={() => handleClick(slide.link)}
          >
            <img
              src={slide.img}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center p-6 text-white bg-gradient-to-t from-black to-transparent z-10">
              <div className="text-center">
                <h3 className="text-3xl sm:text-4xl font-bold">{slide.caption}</h3>
                <p className="text-lg sm:text-xl">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-700"
      >
        <MdArrowBack className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-700"
      >
        <MdArrowForward className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Hero;
