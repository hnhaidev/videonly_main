import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const footerAboutLinks = [
  {
    display: "이용약관",
    path: "/terms",
  },
  {
    display: "개인정보처리방침",
    path: "/security",
  },
  {
    display: "고객센터",
    path: "/customer",
  },
];

const footerCustomLinks = [
  {
    icon: "./assets/icons/footer-sns-icon-1@3x.png",
    path: "#",
  },
  {
    icon: "./assets/icons/footer-sns-icon-2@3x.png",
    path: "#",
  },
  {
    icon: "./assets/icons/footer-sns-icon-3@3x.png",
    path: "#",
  },
  {
    icon: "./assets/icons/footer-sns-icon-4@3x.png",
    path: "#",
  },
];

const info = {
  companyName: "비디온리",
  representing: "홍길동",
  dkkd: "356-00-00000",
  email: "test0101@vidionly.co.kr",
  fax: "070-0000-0000",
  address: "서울특별시 강남구 도산대로 8길 17 3층",
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__contents">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="footer__contents__left">
                <div className="footer__contents__left__link">
                  {footerAboutLinks.map((val, idx) => {
                    return (
                      <Link
                        to={val.display}
                        className="footer__contents__left__link__text"
                        key={idx}
                      >
                        {val.display}
                      </Link>
                    );
                  })}
                </div>
                <div className="footer__contents__left__content">
                  <p className="footer__contents__left__content__p animation">
                    {`${info.companyName} ｜ 대표자 : ${info.representing} ｜ 사업자 등록번호 : ${info.dkkd}`}
                  </p>
                  <p className="footer__contents__left__content__p animation">
                    {`이메일 : ${info.email}｜ FAX : ${info.fax}`}
                  </p>
                  <p className="footer__contents__left__content__p animation">
                    {info.address}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="footer__contents__right">
                {footerCustomLinks.map((val, idx) => {
                  return (
                    <a
                      href={val.path}
                      key={idx}
                      className="footer__contents__right__link"
                    >
                      <LazyLoadImage src={val.icon} alt="icon" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="footer__contents__left__copyright">
            <p className="footer__contents__left__copyright__p">
              Copyright© VIDIONLY All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
