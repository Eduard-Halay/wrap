import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./compnents/Header";
import Features from "./compnents/Features";
import Main from "./compnents/Main";
import Counters from "./compnents/Counters";
import Categories from "./compnents/Categories";
import Items from "./compnents/Items";
import ShowFullItem from "./compnents/ShowFullItem";
import InputOrder from "./compnents/InputOrder";
import script from "./compnents/script";
import generateUniqueId from "./utils";
import Footer from "./compnents/Footer";
import MainPage from "./pages/main";
import CartPage from "./pages/cart";
import KofPage from "./pages/kof";
import RulePage from "./pages/rule";
import { useTranslation } from "react-i18next";

class App extends React.Component {

  constructor(props) {   super(props);  
  // в зависимости от ключа из локал стораджа показивать либо айтемс ру либо айтемс ен 
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Subscribers",
          
          
          category: "Youtube",
          price: "10",
          quantity: "100",
          textlink: "Channel link ",
          link: "",
          finalprice: "",
          pmin: "0",
          pstep: "10",
          qmin: "0",
          qstep: "100",
        },
        {
          id: 2,
          title: "Views ",
          
        
          category: "Youtube",
          price: "10",
          quantity: "100",
          textlink: "Link to video ",
          link: "",
          finalprice: "",
          pmin: "0",
          pstep: "10",
          qmin: "0",
          qstep: "100",
        },
        {
          id: 3,
          title: "Likes",
          
        
          category: "Youtube",
          price: "10",
          quantity: "100",
          textlink: "Link to video ",
          link: "",
          finalprice: "",
          pmin: "0",
          pstep: "10",
          qmin: "0",
          qstep: "100",
        },
        {
          id: 4,
          title: "Views Shorts",
         
         
          category: "Youtube",
          price: "10",
          quantity: "100",
          textlink: "Link to video ",
          link: "",
          finalprice: "",
          pmin: "0",
          pstep: "10",
          qmin: "0",
          qstep: "100",
        },
        {
          id: 5,
          title: "Subscribers",
         
          
          category: "Instagram",
          price: "10",
          quantity: "100",
          textlink: "Link to profile",
          link: "",
          finalprice: "",
          pmin: "0",
          pstep: "10",
          qmin: "0",
          qstep: "100",
        },
        {
          id: 6,
          title: "Views",
          
     
          category: "Instagram",
          price: "10",
          quantity: "100",
          textlink: "Link to publication",
          link: "",
          finalprice: "",
          pmin: "0",
          pstep: "10",
          qmin: "0",
          qstep: "100",
        },
        {
          id: 7,
          title: "Likes",
          
         
          category: "Instagram",

          price: "10",
          quantity: "100",
          textlink: "Link to publication ",
          link: "",
          finalprice: "",
          pmin: "0",
          pstep: "10",
          qmin: "0",
          qstep: "100",
        },
       
        {
          id: 8,
          title: "Views Reels",
          
         
          category: "Instagram",
          price: "10",
          quantity: "100",
          textlink: "Link to video ",
          link: "",
          finalprice: "",
          pmin: "0",
          pstep: "10",
          qmin: "0",
          qstep: "100",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.setState({ currentItems: this.state.items });
  }

  deleteItem(id) {
    const newItems = this.state.items.filter((el) => el.id !== id);
    this.setState({ items: newItems, currentItems: newItems });
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
      
    });
  }

  deleteOrder(id) {
    const index = this.state.orders.findIndex((el) => el.id === id);
    if (index !== -1) {
      const newOrders = [...this.state.orders];
      newOrders.splice(index, 1);
      this.setState({ orders: newOrders }); localStorage.setItem("orders", JSON.stringify(newOrders))
   
    }
   
  } 
 
  addToOrder(item) {
    // добавляем каждый новый элемент в корзину, даже если он уже существует
    this.setState({ orders: [...this.state.orders, item] });
    
    localStorage.setItem("orders", JSON.stringify([...this.state.orders, item]))
  }

 
  // function getOrderString(item) {
  //   const { category, title, textlink, link, finalprice } = item;
  //   const orderString = `Заказал ${category} ${title} ${textlink} ${link} ${finalprice}`;
  //   return orderString;
  // }
  // const orderString = getOrderString(item);
  
  render() {
    return (
        <div> 
        
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
            <Routes>
              <Route path="/" element={
                <MainPage
                    chooseCategory={this.chooseCategory}
                    onShowItem={this.onShowItem}
                    items={this.state.currentItems}
                    onDelete={this.deleteItem}
                    showFullItem={this.state.showFullItem}
                    fullItem={this.state.fullItem}
                    addToOrder={this.addToOrder}
                />}
              />
              <Route path="/cart" element={
                <CartPage
                  orders={this.state.orders}
                  onDelete={this.deleteOrder}
                />
              }
              />
               <Route path="/kof" element={
                <KofPage
                orders={this.state.orders}
                onDelete={this.deleteOrder}
                />
              }
              />
              <Route path="/rule" element={
                <RulePage
                orders={this.state.orders}
                onDelete={this.deleteOrder}
                />
              }
              />
            </Routes>
          <Footer />
        </div>
    );
  }
}

export default App;

