import React from "react";
import { useTranslation } from "react-i18next";

export default function Features() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <section className="section custom-section position-relative section-md">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7 col-12">
            <div className="section-name wow fadeInRight">{t("of")}</div>
            <h3
              className="text-capitalize devider-left wow fadeInLeft"
              data-wow-delay=".2s"
            >
              {t("w")}
              <span className="text-but"> {t("cu")} </span>
            </h3>
            <p>{t("mt")}</p>
            <div className="row row-15">
              <div className="col-xl-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="box-default">
                  <div className="box-default-title">{t("s")}</div>
                  <p className="box-default-description">{t("waa")}</p>
                  <span className="box-default-icon novi-icon icon-lg mercury-icon-phone-24"></span>
                </div>
              </div>
              <div className="col-xl-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="box-default">
                  <div className="box-default-title">{t("st")}</div>
                  <p className="box-default-description">{t("fw")}</p>
                  <span className="box-default-icon novi-icon icon-lg mercury-icon-target-2"></span>
                </div>
              </div>
              <div className="col-xl-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="box-default">
                  <div className="box-default-title">{t("et")}</div>
                  <p className="box-default-description">{t("wet")}</p>
                  <span className="box-default-icon novi-icon icon-lg mercury-icon-user"></span>
                </div>
              </div>

              <div className="col-xl-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="box-default">
                  <div className="box-default-title">{t("fop")}</div>
                  <p className="box-default-description">{t("wgp")}</p>
                  <span className="box-default-icon novi-icon icon-lg mercury-icon-time"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-left-side wow slideInRight" data-wow-delay=".5s">
        <img src="images/home-2-636x480.jpg" alt="" width="636" height="240" />
      </div>
    </section>
  );
}
