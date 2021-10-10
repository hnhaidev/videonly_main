import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Tutorial = ({ listTutorial }) => {
  const ListItem = () => {
    return (
      <div className="row">
        {listTutorial &&
          listTutorial.map((val, idx) => {
            return (
              <div className="col-xs-12 col-md-6 col-lg-4" key={idx}>
                {Item(val)}
              </div>
            );
          })}
      </div>
    );
  };

  const Item = (val) => {
    return (
      <div className="tutorial__contents__list__item animation">
        <div className="tutorial__contents__list__item__img">
          <LazyLoadImage src={val.image} alt="item" />
        </div>
        <div className="tutorial__contents__list__item__content">
          <div className="tutorial__contents__list__item__content__top">
            <div className="tutorial__contents__list__item__content__top__heading">
              {val.heading}
            </div>
            <Link
              to="#"
              className="tutorial__contents__list__item__content__top__icon"
            >
              <LazyLoadImage src={val.icon} alt="icon" />
            </Link>
          </div>
          <div className="tutorial__contents__list__item__content__paragraph">
            <h3 className="tutorial__contents__list__item__content__paragraph__h3">
              {val.paragraph}
            </h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="tutorial">
      <div className="container">
        <div className="tutorial__heading">
          <div className="tutorial__heading__top subTitle headingAnimation">
            Tutorial Guide
          </div>
          <h2 className="tutorial__heading__h2 heading headingAnimation">
            영상 만들기, 어렵지 않아요
          </h2>
          <div className="tutorial__heading__bottom textp animation">
            나에게 맞는 템플릿,
            <br />
            망설이지 말고 지금 직접 체험해보세요!
          </div>
        </div>
        <div className="tutorial__contents">
          <div className="tutorial__contents__list ">
            <ListItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
