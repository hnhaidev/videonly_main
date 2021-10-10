import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Rectangle = ({ rectangle }) => {
  const ListItem = (val) => {
    return (
      <div className="rectangle__contents__item animation">
        <div className="rectangle__contents__item__child">
          <div className="rectangle__contents__item__child__icon">
            <LazyLoadImage src={val.icon} alt="icon" />
          </div>
          <div className="rectangle__contents__item__child__title">
            <h3 className="rectangle__contents__item__child__title__h3 textp">
              {val.title}
            </h3>
          </div>
          <div className="rectangle__contents__item__child__count">
            {val.count}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="rectangle">
      <div className="container">
        <div className="rectangle__heading">
          <h2 className="rectangle__heading__h2 heading headingAnimation">
            체험 가능한 템플릿
          </h2>
        </div>
        <div className="rectangle__contents">
          <div className="row">
            {rectangle &&
              rectangle.map((val, idx) => {
                return (
                  <div className="col-xs-12 col-md-6 col-lg-4" key={idx}>
                    {ListItem(val)}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="rectangle__footer">
          <div className="rectangle__footer__title">
            <p className="rectangle__footer__title__p textp animation">
              나에게 맞는 템플릿, 망설이지 말고 지금 직접 체험해보세요!
            </p>
          </div>
          <div className="rectangle__footer__link animation">
            <button className="btn button_box">시작하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rectangle;
