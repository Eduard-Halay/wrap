import React from "react";
import generateUniqueId from "../utils";
import { useTranslation } from "react-i18next";

const Item = (props) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="pricing-box bg-gray-dark">
      <div className="pricing-box-category text-white  mx-auto d-block">
        {props.item.category}
      </div>

      <hr />
      <div className="pricing-box-inner">
        <span className="pricing-box-price text-white  mx-auto d-block">
          {props.item.title}
        </span>
      </div>
      <br />

      <button
        className="pricing-box-button btn button-circle btn-primary-rounded btn-sm btn-block btn-half-width mx-auto d-block but "
        onClick={() =>
          props.onShowItem({ ...props.item, id: generateUniqueId() })
        }
      >
        {t("o")}
      </button>
    </div>
  );
};

export default Item;
