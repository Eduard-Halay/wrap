import React from "react";
import { FaTrash } from "react-icons/fa";
import ShowFullItem from "./ShowFullItem";

const Order = (props) => {
  const handleDelete = () => {
    props.onDelete(props.item.id);
  };

  return (
    <div className="container">
      <div className="item">
        <h2>
          {props.item.category} {props.item.title}
        </h2>
        <p>
          <FaTrash className="delete-icon" onClick={handleDelete} />
        </p>
        <p>{props.item.finalprice}$</p>
        {/* пройтись циклом по корзине и из кажого елемента корзины собрать масив из
        нужных даных и отрпавить даные */}
        <b>
          {props.item.textlink}
          {props.item.link}
        </b>
      </div>
    </div>
  );
};

export default Order;
