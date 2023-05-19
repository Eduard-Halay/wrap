import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

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
      alert(
        "Thank you for your order. We will contact you shortly.\n Спасибо за Ваш заказ. Ми свяжемся с Вами в ближайшее время. "
      );
    })
    .catch((err) => console.log(err));
}
