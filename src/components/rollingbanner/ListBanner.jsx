import React from "react";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ListBanner = ({ listBanner }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="list__banner">
      <Slider {...settings}>
        {listBanner &&
          listBanner.map((val, idx) => (
            <div key={idx} className="item__banner animation">
              <LazyLoadImage src={val} alt="banner" />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default ListBanner;
