import React from "react";
import { useTranslation } from "react-i18next";

export default function Main() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <section
      className="section main-section parallax-scene-js"
      style={{ backgroundColor: "#3e2c78", backgroundSize: "cover" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-12">
            <div className="main-decorated-box text-center text-xl-left">
              <h1
                className="text-white text-xl-center wow slideInRight"
                data-wow-delay=".3s"
              >
                <span className="biggest d-block d-xl-flex font-weight-bold"></span>

                <span className="big font-weight-bold d-inline-flex offset-right-170">
                  {t("tbs")}
                </span>
                <span className="align-top offset-top-30 d-inline-block font-weight-light prefix-text">
                  {t("teya")}
                </span>
              </h1>

              <div className="decorated-subtitle text-italic text-white wow slideInLeft">
                {t("fifys")}
              </div>
            </div>
          </div>
          <div
            className="col-12 text-center offset-top-75"
            data-wow-delay=".2s"
          ></div>
        </div>
      </div>
      <div className="decorate-layer">
        <div className="layer-1">
          <div className="layer" data-depth=".20">
            <img
              src="images/parallax-item-1-563x532.png"
              alt=""
              width="563"
              height="266"
            />
          </div>
        </div>
        <div className="layer-2">
          <div className="layer" data-depth=".30">
            <img
              src="images/parallax-item-2-276x343.png"
              alt=""
              width="276"
              height="171"
            />
          </div>
        </div>
        <div className="layer-3">
          <div className="layer" data-depth=".40">
            <img
              src="images/parallax-item-3-153x144.png"
              alt=""
              width="153"
              height="72"
            />
          </div>
        </div>
        <div className="layer-4">
          <div className="layer" data-depth=".20">
            <img
              src="images/parallax-item-4-69x74.png"
              alt=""
              width="69"
              height="37"
            />
          </div>
        </div>
        <div className="layer-5">
          <div className="layer" data-depth=".40">
            <img
              src="images/parallax-item-5-72x75.png"
              alt=""
              width="72"
              height="37"
            />
          </div>
        </div>
        <div className="layer-6">
          <div className="layer" data-depth=".30">
            <img
              src="images/parallax-item-6-45x54.png"
              alt=""
              width="45"
              height="27"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
