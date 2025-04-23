import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // Устанавливаем начальное значение для slidesToShow
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // Используем динамическое значение
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  useEffect(() => {
    const handleResize = () => {
      // Устанавливаем количество слайдов в зависимости от ширины экрана
      if (window.innerWidth > 720) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize(); // Вызываем функцию при первом рендере
    window.addEventListener("resize", handleResize); // Подписываемся на события изменения размера окна

    return () => window.removeEventListener("resize", handleResize); // Убираем обработчик при размонтировании
  }, []);

  const images = [
    `${process.env.PUBLIC_URL}/img/slider/3.jpg`,
    `${process.env.PUBLIC_URL}/img/slider/4.jpg`,
    `${process.env.PUBLIC_URL}/img/slider/5.jpg`,
    `${process.env.PUBLIC_URL}/img/slider/6.jpg`,
    `${process.env.PUBLIC_URL}/img/slider/7.jpg`,
    `${process.env.PUBLIC_URL}/img/slider/8.jpg`,
    `${process.env.PUBLIC_URL}/img/slider/9.jpg`,
    `${process.env.PUBLIC_URL}/img/slider/10.jpg`,
    `${process.env.PUBLIC_URL}/img/slider/11.jpg`,
    `${process.env.PUBLIC_URL}/img/slider/12.jpg`,
    `${process.env.PUBLIC_URL}/img/slider/13.jpg`,
    `${process.env.PUBLIC_URL}/img/slider/14.jpg`,
    `${process.env.PUBLIC_URL}/img/slider/15.jpg`,
    `${process.env.PUBLIC_URL}/img/slider/16.jpg`,
    `${process.env.PUBLIC_URL}/img/slider/17.jpg`,
    `${process.env.PUBLIC_URL}/img/slider/18.jpg`,
    `${process.env.PUBLIC_URL}/img/slider/19.jpg`,
    `${process.env.PUBLIC_URL}/img/slider/20.jpg`,
    `${process.env.PUBLIC_URL}/img/slider/21.jpg`,
    `${process.env.PUBLIC_URL}/img/slider/22.jpg`,
    `${process.env.PUBLIC_URL}/img/slider/23.jpg`,
    `${process.env.PUBLIC_URL}/img/slider/24.jpg`,
  ];

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <section className="slider" style={{ width: "auto", height: "700px" }}>
      <div className="slider__top">
        <h2 className="slider__title">Наши работы</h2>
        <div className="slider__button"
          style={{marginBottom: "10px", }}>
          <button
            onClick={goToPrev}
            style={{ background: "none", border: "none", cursor: "pointer", marginRight: "20px", }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/slider/previous.svg`}
              alt="Previous"
              style={{ width: "56px", height: "56px" }}
            />
          </button>
          <button
            onClick={goToNext}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/slider/next.svg`}
              alt="Next"
              style={{ width: "56px", height: "56px" }}
            />
          </button>
        </div>
      
      </div>
      <div style={{ textAlign: "center",  }}>
        <Slider ref={sliderRef} {...settings}>
          {images.map((img, index) => (
            <div key={index+1} className="slider__img">
              <img
                src={img}
                alt={`Slide ${index+1}`}
                style={{ width: "400px", height: "450px", objectFit: "cover" }}
              />
            </div>
          ))}
        </Slider>
        <div className="slider__indicator">
          {images.map((_, index) => (
            <span
              key={index}
              style={{
                height: "6px", 
                width: "214px", 
                marginTop: "28px",
                backgroundColor:
                  index === currentIndex ? "red" : "lightgray",
                display: "inline-block",
                borderRadius: "2px", 
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
