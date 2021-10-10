import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LongBanner = ({ longbanner, isButton }) => {
  return (
    <div className="longbanner">
      <div className="longbanner__banner">
        <LazyLoadImage src={longbanner.banner} alt="banner" />
      </div>
      <div className="longbanner__contents">
        <div className="container">
          <div className="longbanner__contents__text">
            <div className="longbanner__contents__text__child">
              <h2 className="longbanner__contents__text__child__h2 heading headingAnimation">
                {longbanner.heading}
              </h2>
              <p className="longbanner__contents__text__child__p textp animation">
                {longbanner.paragraph.indexOf("<br>") !== -1
                  ? longbanner.paragraph.split("<br>")[0]
                  : longbanner.paragraph}
                <br />

                {longbanner.paragraph.indexOf("<br>") !== -1
                  ? longbanner.paragraph.split("<br>")[1]
                  : null}
              </p>
              {!isButton && (
                <div className="longbanner__contents__text__child__link animation">
                  <button className="btn button_longbanner">시작하기</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongBanner;
