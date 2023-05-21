import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

emailjs.init("iDzr85ID5bf2romvV");

export default function sendmail() {
  const serviceID = "service_4vqvhka";
  const templateID = "template_ku0qt5g";
  const savedOrder = JSON.parse(localStorage.getItem("orders"));
  const selectedOrders = savedOrder.map(
    ({ title, category, finalprice, textlink, link, quantity }) => ({
      title,
      category,
      finalprice,
      textlink,
      link,
      quantity,
    })
  );
  const orderString = selectedOrders
    .map(
      ({ title, category, finalprice, textlink, link, quantity }) =>
        `Заказали ${category} ${title} по цене ${finalprice}количество ${quantity} ${textlink} ${link}`
    )
    .join("\n");

  const params = {
    name: document.getElementById("user_name").value,
    email: document.getElementById("user_email").value,
    phone: document.getElementById("user_phone").value,
    orders: orderString,
  };

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("user_name").value = "";
      document.getElementById("user_email").value = "";
      document.getElementById("user_phone").value = "";

      console.log(res);
      window.location.href = "/alert";
    })
    .catch((err) => console.log(err));
}
