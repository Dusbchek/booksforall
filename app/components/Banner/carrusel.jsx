import React, { useState, useEffect } from 'react';
import { Banner1 } from "../books1";

export function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === Banner1.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const redirectToPage = "";

  return (
    <div className="max-w-2xl mx-auto mt-16">
      <div
        id="default-carousel"
        className="relative mt-2"
        data-carousel="static"
      >
        {/* Carousel wrapper */}
        <div className="rounded-lg overflow-hidden mx-auto relative h-[90px] w-[300px] sm:h-[190px] sm:w-[700px] sm:mt-[20px] sm:mx-auto">
          {Banner1.map((slide, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${
                index === currentSlide ? 'block' : 'hidden'
              }`}
              data-carousel-item
            >
              {index === currentSlide && (
                <>
                  
                  <a href="#" target="_blank" rel="noopener noreferrer" className='mx-auto'>
                    <img
                      src={slide.img}
                      className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform hover:scale-105 transition-transform"
                      alt="..."
                    />
                  </a>
                </>
              )}
            </div>
          ))}
        </div>
        {/* Slider indicators */}
        <div className="flex absolute bottom-1 left-1/2 z-30 space-x-3 -translate-x-1/2">
          {Banner1.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-2 h-2 rounded-full ${
                index === currentSlide
                  ? 'bg-blue-500 hover:bg-blue-600' // Cambiar el color al hacer hover
                  : 'bg-gray-400 hover:bg-gray-500' // Cambiar el color al hacer hover
              }`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
