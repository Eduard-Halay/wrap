import Main from "../../compnents/Main";
import Features from "../../compnents/Features";
import Categories from "../../compnents/Categories";
import Items from "../../compnents/Items";
import ShowFullItem from "../../compnents/ShowFullItem";

const MainPage = (props) => {
    return (
        <>
            <Main />
            <Features />
            
            <Categories chooseCategory={props.chooseCategory} />
            <Items
                onShowItem={props.onShowItem}
                items={props.items}
                onAdd={props.addToOrder}
                onDelete={props.deleteItem}
            />
            {props.showFullItem && (
                <ShowFullItem
                    onAdd={props.addToOrder}
                    onShowItem={props.onShowItem}
                    item={props.fullItem}
                />
            )}
        </>
    );
};

export default MainPage;