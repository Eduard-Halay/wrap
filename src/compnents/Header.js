import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const ShowOrders = (props) => {
    let summa = 0;
    props.orders.forEach((el) => {
      const finalprice = Number.parseFloat(el.finalprice);
      if (!isNaN(finalprice)) {
        summa += finalprice;
      }
    });

    return (
      <div>
        {props.orders.map((el) => (
          <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}
        <p className="summa">
          {t("oram")} {new Intl.NumberFormat().format(summa.toFixed(2))}$
        </p>
      </div>
    );
  };

  const showNothing = () => {
    return (
      <div className="empty">
        <h2>{t("noitem")}</h2>
      </div>
    );
  };

  return (
    <header className="section page-header">
      <div className="rd-navbar-aside-outer rd-navbar-collapse buck">
        <div className="container">
          <div>
            <Link to={"/"}>
              <span className="logo text-white">Fulminant </span>
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
                  <ShowOrders orders={props.orders} onDelete={props.onDelete} />
                ) : (
                  showNothing()
                )}
                <Link
                  onClick={() => setCartOpen(!cartOpen)}
                  className={"btn btn-primary"}
                  to={"/cart"}
                >
                  {t("next")}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
