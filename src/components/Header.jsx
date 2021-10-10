import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = ({ header }) => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="container">
          <div className="header__top__logo">
            <Link to="/">
              <LazyLoadImage src={header.logo} alt="logo" />
            </Link>
          </div>
          <div className="header__top__right">
            <div className="header__top__right__login">
              <button className="btn-login">Login</button>
            </div>
            <div className="header__top__right__join">
              <button className="btn btn-default">Join</button>
            </div>
          </div>
        </div>
      </div>
      <div className="header__banner">
        <LazyLoadImage src={header.mainBanner} alt="headerbanner" />
      </div>
      <div className="header__contents">
        <div className="container">
          <div className="header__contents__text">
            <div className="header__contents__text__child">
              <h1 className="header__contents__text__child__h1">
                {header.heading.indexOf("<br>") !== -1
                  ? header.heading.split("<br>")[0]
                  : header.heading}
                <br />
                {header.heading.indexOf("<br>") !== -1
                  ? header.heading.split("<br>")[1]
                  : null}
                <br />
                {header.heading.indexOf("<br>") !== -1
                  ? header.heading.split("<br>")[2]
                  : null}
              </h1>
              <p className="header__contents__text__child__p textp">
                {header.paragraph}
              </p>
              <div className="header__contents__text__child__link">
                <button className="btn button_box">시작하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
