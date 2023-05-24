import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./compnents/Header";
import Footer from "./compnents/Footer";
import MainPage from "./pages/main";
import CartPage from "./pages/cart";
import KofPage from "./pages/kof";
import RulePage from "./pages/rule";
import AlertPage from "./pages/alert";
import i18next from "i18next";

class App extends React.Component {
  constructor(props) {   super(props);
    this.currentLanguage = "en-US";
  // в зависимости от ключа из локал стораджа показивать либо айтемс ру либо айтемс ен 
    this.state = {
      orders: [],
      currentItems: [],
      items: {
        'en-US': [ {
          id: 1,
          title: "Subscribers",
          textprise: "Price for 100 followers 6$",

          category: "Youtube",
          price: "6",
          quantity: "100",
          textlink: "Channel link ",
          link: "",
          finalprice: "",
          pmin: "0",
          pstep: "6",
          qmin: "0",
          qstep: "100",
        },
          {
            id: 2,
            title: "Views ",
            textprise: "Price for 1000 views 8$",

            category: "Youtube",
            price: "8",
            quantity: "1000",
            textlink: "Link to video ",
            link: "",
            finalprice: "",
            pmin: "0",
            pstep: "8",
            qmin: "0",
            qstep: "1000",
          },
          {
            id: 3,
            title: "Likes",
            textprise: "Price for 100 likes 2$",

            category: "Youtube",
            price: "2",
            quantity: "100",
            textlink: "Link to video ",
            link: "",
            finalprice: "",
            pmin: "0",
            pstep: "2",
            qmin: "0",
            qstep: "100",
          },
          {
            id: 4,
            title: "Views Shorts",
            textprise: "Price for 1000 views Shorts 8$",

            category: "Youtube",
            price: "8",
            quantity: "1000",
            textlink: "Link to video ",
            link: "",
            finalprice: "",
            pmin: "0",
            pstep: "8",
            qmin: "0",
            qstep: "1000",
          },
          {
            id: 5,
            title: "Subscribers",
            textprise: "Price for 1000 subscribers 8$",

            category: "Instagram",
            price: "8",
            quantity: "1000",
            textlink: "Link to profile",
            link: "",
            finalprice: "",
            pmin: "0",
            pstep: "8",
            qmin: "0",
            qstep: "1000",
          },
          {
            id: 6,
            title: "Views",
            textprise: "Price for 1000 views 2$",

            category: "Instagram",
            price: "2",
            quantity: "1000",
            textlink: "Link to publication",
            link: "",
            finalprice: "",
            pmin: "0",
            pstep: "2",
            qmin: "0",
            qstep: "1000",
          },
          {
            id: 7,
            title: "Likes",


            category: "Instagram",
            textprise: "Price for 500 likes 2$",
            price: "2",
            quantity: "500",
            textlink: "Link to publication ",
            link: "",
            finalprice: "",
            pmin: "0",
            pstep: "2",
            qmin: "0",
            qstep: "500",
          },

          {
            id: 8,
            title: "Views Reels",
            textprise: "Price for 1000 likes 2$",

            category: "Instagram",
            price: "2",
            quantity: "1000",
            textlink: "Link to video ",
            link: "",
            finalprice: "",
            pmin: "0",
            pstep: "2",
            qmin: "0",
            qstep: "1000",
          },],
        'ru-RU': [{
          id: 1,
          title: "Подписчики",
          textprise: "Цена за 100 подписчиков 6$",

    category: "Youtube",
        price: "6",
        quantity: "100",
        textlink: "Ссылка на канал ",
        link: "",
        finalprice: "",
        pmin: "0",
        pstep: "6",
        qmin: "0",
        qstep: "100",
  },
    {
      id: 2,
          title: "Просмотры  ",
        textprise: "Цена за 1000 просмотров 8$",

        category: "Youtube",
        price: "8",
        quantity: "1000",
        textlink: "Ссылка на видео ",
        link: "",
        finalprice: "",
        pmin: "0",
        pstep: "8",
        qmin: "0",
        qstep: "1000",
    },
    {
      id: 3,
          title: "Лайки",
        textprise: "Цена за 100 лайков 2$",

        category: "Youtube",
        price: "2",
        quantity: "100",
        textlink: "Ссылка на видео ",
        link: "",
        finalprice: "",
        pmin: "0",
        pstep: "2",
        qmin: "0",
        qstep: "100",
    },
    {
      id: 4,
          title: "Просмотры Shorts",
        textprise: "Цена за 1000 просмотров Shorts 8$",

        category: "Youtube",
        price: "8",
        quantity: "1000",
        textlink: "Ссылка на видео ",
        link: "",
        finalprice: "",
        pmin: "0",
        pstep: "8",
        qmin: "0",
        qstep: "1000",
    },
    {
      id: 5,
          title: "Подписчики",
        textprise: "Цена за 1000 подписчиков 8$",

        category: "Instagram",
        price: "8",
        quantity: "1000",
        textlink: "Ссылка на профиль",
        link: "",
        finalprice: "",
        pmin: "0",
        pstep: "8",
        qmin: "0",
        qstep: "1000",
    },
    {
      id: 6,
          title: "Просмотры",
        textprise: "Цена за 1000 просмотров 2$",

        category: "Instagram",
        price: "2",
        quantity: "1000",
        textlink: "Ссылка на публикацию",
        link: "",
        finalprice: "",
        pmin: "0",
        pstep: "2",
        qmin: "0",
        qstep: "1000",
    },
    {
      id: 7,
          title: "Лайки",


        category: "Instagram",
        textprise: "Цена за 500 лайков 2$",
        price: "2",
        quantity: "500",
        textlink: "Ссылка на публикацию ",
        link: "",
        finalprice: "",
        pmin: "0",
        pstep: "2",
        qmin: "0",
        qstep: "500",
    },

    {
      id: 8,
          title: "Просмотры Reels",
        textprise: "Цена за 1000 лайков 2$",

        category: "Instagram",
        price: "2",
        quantity: "1000",
        textlink: "Ссылка на видео ",
        link: "",
        finalprice: "",
        pmin: "0",
        pstep: "2",
        qmin: "0",
        qstep: "1000",
    }]
      },
      showFullItem: false,
      fullItem: {},
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.onTranslate = this.onTranslate.bind(this);
  }

  componentDidMount() {
    this.setState({currentItems: this.state.items[this.currentLanguage]});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.currentLanguage !== this.state.currentLanguage) {
      this.setState({ currentItems: this.state.items[this.state.currentLanguage]})
    }
  }

  deleteItem(id) {
    const newItems = this.state.items[this.state.currentLanguage].filter((el) => el.id !== id);
    this.setState({ items: newItems, currentItems: newItems });
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items[this.state.currentLanguage] });
      return;
    }

    this.setState({
      currentItems: this.state.items[this.state.currentLanguage].filter((el) => el.category === category),
      
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
   
    this.setState({ orders: [...this.state.orders, item] });
    
    localStorage.setItem("orders", JSON.stringify([...this.state.orders, item]))
  }

  onTranslate(key) {
    this.setState( {currentLanguage: key})
  }
 
 
  render() {
    return (
        <div> 
        
          <Header orders={this.state.orders} onDelete={this.deleteOrder} onTranslate={this.onTranslate} />
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
               <Route path="/alert" element={
                <AlertPage
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

