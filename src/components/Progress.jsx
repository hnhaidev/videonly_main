import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Progress = ({ progress }) => {
  const ProgressHeader = () => {
    return (
      <div className="progress__heading__title">
        <h2 className="progress__heading__title__h2 heading headingAnimation">
          {progress.heading}
        </h2>
        <p className="progress__heading__title__p textp headingAnimation">
          {progress.paragraph.indexOf("<br>") !== -1
            ? progress.paragraph.split("<br>")[0]
            : progress.paragraph}
          <br />

          {progress.paragraph.indexOf("<br>") !== -1
            ? progress.paragraph.split("<br>")[1]
            : null}
        </p>
      </div>
    );
  };

  const ListItem = (val) => {
    return (
      <div className="progress__contents__item animation">
        <div className="progress__contents__item__child">
          <div className="progress__contents__item__child__icon">
            <LazyLoadImage src={val.icon} alt="icon" />
          </div>
          <div className="progress__contents__item__child__title">
            <h3 className="progress__contents__item__child__title__h3">
              {val.title}
            </h3>
            <p className="progress__contents__item__child__title__p">
              {val.subTitle}
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="progress">
      <div className="container">
        <div className="progress__heading">
          <ProgressHeader />
        </div>

        <div className="progress__contents">
          <div className="row">
            {progress.items &&
              progress.items.map((val, idx) => {
                return (
                  <div className="col-xs-6 col-lg-3" key={idx}>
                    {ListItem(val)}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
