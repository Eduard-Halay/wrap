import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <footer class="section footer-classic section-sm">
      <div class="container">
        <div class="row row-30">
          <div class="col-lg-3 col-sm-4 wow fadeInUp" data-wow-delay=".3s">
            <p class="footer-classic-title">{t("k")}</p>
            <ul class="footer-classic-nav-list text-white bl">
              <li>
                <Link to={"/kof"}>{t("pp")} </Link>
              </li>
              <li>
                <Link to={"/rule"}>{t("tu")} </Link>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-sm-8 wow fadeInUp">
            <p class="footer-classic-title">{t("l")}</p>

            <a
              class="d-inline-block accent-link bl"
              href="mailto:fulminant.org@gmail.com"
            >
              fulminant.org@gmail.com
            </a>
            <ul class="footer-classic-nav-list text-white bl">
              <li>
                <a className="fa fa-instagram " href="#">
                  &nbsp;Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container wow fadeInUp" data-wow-delay=".4s">
        <div class="footer-classic-aside">
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
