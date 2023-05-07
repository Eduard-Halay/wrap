import React from "react";
import Item from "./Item";

const Items = (props) => {
  return (
    <section className="section section-md bg-xs-overlay">
      <div className="container">
        <div className="row">
          {props?.items?.map((el) => (
            <article className="col-12 col-md-6 col-lg-3 mx-auto" key={el.id}>
              <Item
                onShowItem={props.onShowItem}
                item={el}
                onAdd={props.onAdd}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Items;
