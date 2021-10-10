import React from "react";
import ListBanner from "./ListBanner";

const RollingBanner = ({ listBanner }) => {
  return (
    <div className="rolling">
      <div className="container">
        <div className="rolling__header">
          <div className="rolling__header__text">
            <h2 className="rolling__header__text__h2 textp headingAnimation">
              기업들의 템플릿 제작
            </h2>
          </div>
          <div className="rolling__header__more">
            <button className="btn btn-more">more &gt;</button>
          </div>
        </div>
      </div>
      <div className="rolling__contents">
        <ListBanner listBanner={listBanner} />
      </div>
    </div>
  );
};

export default RollingBanner;
