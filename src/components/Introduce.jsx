import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const colors = {
  text_color: "#222",
  text_color2: "#fafafc",
  bg_color: "#fa5805",
  white: "#fff",
};
const Introduce = ({ introduce, reverse }) => {
  const IntroduceImage = () => {
    return (
      <div
        className="introduce__contents__image animation"
        style={{
          float: `${reverse ? "right" : "left"}`,
        }}
      >
        <LazyLoadImage src={introduce.image} alt="introduce" />
      </div>
    );
  };

  const IntroduceContents = () => {
    return (
      <div
        className="introduce__contents__text"
        style={{
          float: `${reverse ? "left" : "right"}`,
          textAlign: `${reverse ? "left" : "right"}`,
        }}
      >
        <div
          className="introduce__contents__text__title subTitle animation"
          style={{
            color: `${reverse ? colors.text_color : colors.bg_color}`,
          }}
        >
          {introduce.title}
        </div>
        <h3
          className="introduce__contents__text__heading heading animation"
          style={{
            color: `${reverse ? colors.text_color2 : colors.text_color}`,
          }}
        >
          {introduce.heading}
        </h3>
        <p
          className="introduce__contents__text__paragraph textp animation"
          style={{
            color: `${reverse ? colors.text_color2 : colors.text_color}`,
          }}
        >
          {introduce.paragraph}
        </p>
        <div className="introduce__contents__text__link animation">
          {reverse ? (
            <button className="btn button_longbanner bg-black">시작하기</button>
          ) : (
            <button className="btn button_box">시작하기</button>
          )}
        </div>
      </div>
    );
  };
  return (
    <div
      className="introduce"
      style={{ backgroundColor: `${reverse ? colors.bg_color : colors.white}` }}
    >
      <div className="container">
        <div className="introduce__contents row">
          <div className="col-lg-2" style={{ padding: 0 }}></div>
          <div className="col-sm-12 col-lg-4">
            {reverse ? <IntroduceImage /> : <IntroduceContents />}
          </div>
          <div className="col-lg-2" style={{ padding: 0 }}></div>
          <div className="col-sm-12 col-lg-4">
            {reverse ? <IntroduceContents /> : <IntroduceImage />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
