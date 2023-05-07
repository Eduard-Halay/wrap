import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const categories = [
  {
    key: "all",
    name: "All",
  },
  {
    key: "Youtube",
    name: "Youtube",
  },
  {
    key: "Instagram",
    name: "Instagram",
  },
];

const Categories = (props) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const chooseCategory = (categoryKey) => {
    setActiveCategory(categoryKey);
    props.chooseCategory(categoryKey);
  };
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const activeStyle = {
    backgroundColor: "#ac75c8",
    color: "#fff",
  };

  const categoryStyle = {
    display: "inline-block",
    marginRight: "20px",
    cursor: "pointer",
    fontWeight: "bold",
    backgroundColor: "#3e2c78",
    color: "#fff",
  };

  return (
    <div className="container">
      {" "}
      <div className="row row-50 justify-content-center">
        <div className="col-12 text-center col-md-10 col-lg-8">
          <div className="section-name wow mx-auto" data-wow-delay=".2s">
            <h4> {t("os")}</h4>
          </div>
          <h3 className="wow mx-auto text-capitalize" data-wow-delay=".3s">
            {t("cy")}
          </h3>
        </div>
      </div>
      <div className="categories">
        {categories.map((el) => (
          <div
            key={el.key}
            style={
              activeCategory === el.key
                ? { ...categoryStyle, ...activeStyle }
                : categoryStyle
            }
            onClick={() => chooseCategory(el.key)}
          >
            {el.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
