import Order from "../../compnents/Order";
import InputOrder from "../../compnents/InputOrder";
import { useTranslation } from "react-i18next";
const CartPage = (props) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
    let totalPrice = props.orders?.reduce((acc, order) => {
       
        return acc + Number(order.finalprice);
    }, 0);
     

    return (
        <div className="container" >
            
            {props.orders?.map(el => <Order key={el.id} item={el} onDelete={props.onDelete} />)}
           <span style={{ paddingLeft: '15px' }}> {t("tp")} {totalPrice}</span><InputOrder/>
        </div>
    );
};

export default CartPage;