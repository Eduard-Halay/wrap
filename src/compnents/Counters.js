import React from "react";
import { useTranslation } from "react-i18next";

const Counters = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <section className="section ">
      <div className="container section-md">
        <div className="row row-30 text-center">
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="counter-classic">
              <div className="counter-classic-number">
                <span className="icon-lg novi-icon offset-right-10 mercury-icon-time"></span>
                <span className="counter text-black" data-speed="2000">
                  2015
                </span>
              </div>
              <div className="counter-classic-title">{t("yf")}</div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="counter-classic">
              <div className="counter-classic-number">
                <span className="icon-lg novi-icon offset-right-10 mercury-icon-folder"></span>
                <span className="counter text-black" data-speed="2000">
                  547
                </span>
              </div>
              <div className="counter-classic-title">{t("sp")}</div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="counter-classic">
              <div className="counter-classic-number">
                <span className="icon-lg novi-icon offset-right-10 mercury-icon-users"></span>
                <span className="counter text-black" data-speed="2000">
                  45
                </span>
                <span className="symbol text-black">+</span>
              </div>
              <div className="counter-classic-title">{t("gp")}</div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12">
            <div className="counter-classic">
              <div className="counter-classic-number">
                <span className="icon-lg novi-icon offset-right-10 mercury-icon-group"></span>
                <span className="counter text-black" data-speed="2000">
                  1500
                </span>
              </div>
              <div className="counter-classic-title">{t("tm")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counters;
