import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <footer className="section footer-classic section-sm">
      <div className="container">
        <div className="row row-30">
          <div className="col-lg-3 col-sm-4 wow fadeInUp" data-wow-delay=".3s">
            <p className="footer-classic-title">{t("k")}</p>
            <ul className="footer-classic-nav-list text-white bl">
              <li>
                <Link to={"/kof"}>{t("pp")} </Link>
              </li>
              <li>
                <Link to={"/rule"}>{t("tu")} </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-sm-8 wow fadeInUp">
            <p className="footer-classic-title">{t("l")}</p>

            <a
              className="d-inline-block accent-link bl "
              href="mailto:office.lightning.like@gmail.com"
            >
              office.lightning.like@gmail.com
            </a>
            <ul className="footer-classic-nav-list text-white bl">
              <li>
                <a
                  className="fa fa-instagram "
                  href="https://www.instagram.com/lightning_like/"
                >
                  &nbsp;Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container wow fadeInUp" data-wow-delay=".4s">
        <div className="footer-classic-aside">
          <p className="rights">
            <span className="text-white bl">
              &copy;&nbsp; All Rights Reserved. Design by Halay Eduard
            </span>
          </p>
          <ul className="social-links ">
            <li>
              <a
                className="fa fa-linkedin "
                href="https://www.linkedin.com/in/eduard-halay-161aba260/"
              ></a>
            </li>
            <li>
              <a
                className="fa fa-telegram "
                href="https://t.me/Eduard_Programmer"
              ></a>
            </li>
            {/* <li>
              <a className="fa fa-facebook " href="#"></a>
            </li> */}
            <li>
              <a
                className="fa fa-instagram "
                href="https://www.instagram.com/halay_production_sites/"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
