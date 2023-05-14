import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ShowFullItem = ({ item, onAdd, onShowItem }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [quantity, setQuantity] = useState(item.quantity);
  const [priceObject, setPriceObject] = useState(item.price);
  const [link, setLink] = useState("");

  const handleQuantityChange = (event) => {
    const quantity = parseInt(event.target.value);
    let newPriceObject = priceObject;
    if (quantity >= 0) {
      newPriceObject = Math.floor((quantity / item.qstep) * item.pstep);
    }
    setQuantity(quantity);
    setPriceObject(newPriceObject);
  };

  const handlePriceChange = (event) => {
    const newPriceObject = parseInt(event.target.value);

    quantity = Math.floor((newPriceObject / item.pstep) * item.qstep);

    setPriceObject(newPriceObject);
    setQuantity(quantity);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleAddToCart = () => {
    if (!link || link.length < 1) {
      alert(`${t("pevl")}`);
      return;
    }
    if (quantity <= 0) {
      alert(`${t("pevq")}`);
      return;
    }
    const itemWithFinalPrice = {
      ...item,
      finalprice: priceObject,
      link: link,
    };
    onAdd(itemWithFinalPrice, quantity);
    onShowItem(null);
  };

  return (
    <div className="full-item">
      <div>
        <h2>{item.category}</h2>
        <h2>{item.title}</h2>
        <div>
          <label>
            <br />
            {item.textlink}
            <br />
            <input type="text" value={link} onChange={handleLinkChange} />
            <br />
          </label>

          <label>{item.textprise}</label>
        </div>
        <label>
          {t("eq")}
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min={item.qmin}
            step={item.qstep}
          />
        </label>
        <br />
        {t("p")}
        <input
          id="priceObject"
          type="number"
          value={priceObject}
          onChange={handlePriceChange}
          min={item.pmin}
          step={item.pstep}
          readOnly
        />
        <div
          className=" button button-50 button-circle btn-primary-rounded"
          onClick={handleAddToCart}
        >
          {t("ac")}
        </div>
        <button
          className="  button button-50 button-circle btn-primary-rounded but text-white"
          onClick={() => onShowItem(null)}
        >
          {t("c")}
        </button>
      </div>
    </div>
  );
};

export default ShowFullItem;
