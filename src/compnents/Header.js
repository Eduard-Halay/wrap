import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ShowOrders = (props) => {
  const { t } = useTranslation();

  let summa = 0;
  props.orders.forEach((el) => {
    const finalprice = Number.parseFloat(el.finalprice);
    if (!isNaN(finalprice)) {
      summa += finalprice;
    }
  });
  const isVisible = summa > 0;
  return (
    <div>
      <p className="summa">
        {t("oram")} {new Intl.NumberFormat().format(summa.toFixed(2))}$
      </p>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
    </div>
  );
};

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const showNothing = () => {
    return (
      <div className="empty">
        <h2>{t("noitem")}</h2>
      </div>
    );
  };

  let summa = 0;
  props.orders.forEach((el) => {
    const finalprice = Number.parseFloat(el.finalprice);
    if (!isNaN(finalprice)) {
      summa += finalprice;
    }
  });
  const isVisible = summa > 0;

  return (
    <header className="section page-header">
      <div className="rd-navbar-aside-outer rd-navbar-collapse buck">
        <div className="container">
          <div>
            <Link to={"/"}>
              <span className="logo text-white">Lightning Like </span>
              <button
                onClick={() => changeLanguage("en")}
                className="  btn button-circle btn-primary-rounded btn-sm  "
              >
                En
              </button>
              <button
                onClick={() => changeLanguage("ru")}
                className="  btn button-circle btn-primary-rounded btn-sm  "
              >
                Ru
              </button>
            </Link>
            <ul className="nav">
              {isVisible && (
                <li className="num">{/* Содержимое элемента */}</li>
              )}

              <li>
                <FaShoppingCart
                  onClick={() => setCartOpen(!cartOpen)}
                  className={`shop-cart-button icon-shop ${
                    cartOpen && "active"
                  }`}
                />
              </li>
            </ul>

            {cartOpen && (
              <div className="shop-cart">
                {props.orders.length > 0 ? (
                  <>
                    <Link
                      onClick={() => setCartOpen(!cartOpen)}
                      className={"btn btn-primary"}
                      to={"/cart"}
                    >
                      {t("next")}
                    </Link>
                    <ShowOrders
                      orders={props.orders}
                      onDelete={props.onDelete}
                      t={t} // Передача переменной t в компонент ShowOrders
                    />
                  </>
                ) : (
                  showNothing()
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
