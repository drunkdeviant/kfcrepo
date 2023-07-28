import React from "react";
import "./footer.css";
import footerLogo from "../../assets/img/footer-logo.svg";
import playStore from "../../assets/img/google_play.svg";
import appStore from "../../assets/img/apple.svg";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <img className="footer-logo" src={footerLogo} alt="" />
      <div className="row footer-inner">
        <div className="col-md-2">
          <ul>
            <li>
              <a href="">Lorem, ipsum</a>
            </li>
            <li>
              <a href="">Recusandae, placeat?</a>
            </li>
            <li>
              <a href="">Distinctio possimus</a>
            </li>
            <li>
              <a href="">Dolor neque</a>
            </li>
            <li>
              <a href="">Placeat, voluptatem</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul>
            <li>
              <a href="">Lorem, ipsum</a>
            </li>
            <li>
              <a href="">Recusandae, placeat?</a>
            </li>
            <li>
              <a href="">Distinctio possimus</a>
            </li>
            <li>
              <a href="">Dolor neque</a>
            </li>
            <li>
              <a href="">Placeat, voluptatem</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul>
            <li>
              <a href="">Lorem, ipsum</a>
            </li>
            <li>
              <a href="">Recusandae, placeat?</a>
            </li>
            <li>
              <a href="">Distinctio possimus</a>
            </li>
            <li>
              <a href="">Dolor neque</a>
            </li>
            <li>
              <a href="">Placeat, voluptatem</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul>
            <li>
              <a href="">Lorem, ipsum</a>
            </li>
            <li>
              <a href="">Recusandae, placeat?</a>
            </li>
            <li>
              <a href="">Distinctio possimus</a>
            </li>
            <li>
              <a href="">Dolor neque</a>
            </li>
            <li>
              <a href="">Placeat, voluptatem</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="store-img-wrapper">
            <li>
              <a href="">
                <img src={playStore} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={appStore} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copywrite">
        <p>Copyright © KFC Corporation 2021 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
