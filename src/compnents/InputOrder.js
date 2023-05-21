import React from "react";
import sendMail from "./script";
import { useTranslation } from "react-i18next";

export default function InputOrder() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="container">
      <form>
        <legend>{t("or")}</legend>

        <div className="form-group">
          <label for="">{t("yfln")}</label>
          <input
            type="text"
            className="form-control"
            id="user_name"
            name="user_name"
            placeholder=""
          />
        </div>

        <div className="form-group">
          <label for="">{t("epn")}</label>
          <input
            type="tel"
            className="form-control"
            id="user_phone"
            name="user_phone"
            placeholder="+38 (099) 99 99 999"
          />
        </div>

        <div className="form-group">
          <label for="">{t("ye")}</label>
          <input
            type="email"
            className="form-control"
            id="user_email"
            name="user_email"
            placeholder="mail@gmail.com"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary-rounded button-circle "
          onClick={sendMail}
        >
          {t("pao")}
        </button>
      </form>
      <br></br>
    </div>
  );
}
