import { createContext, useState, useEffect } from "react";
import { products } from "../assets/asssts";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "RM"; // Define constants
    const delivery_fee = 10;
    const [search, setSearch] = useState("");
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});

    const addToCart = async (itemId) => {
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]){
            cartData[itemId] += 1;
        }
        else {
            cartData[itemId] = {};
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems){
            for(const item in cartItem[items]){
                try{
                    if (cartItems[items] > 0){
                        totalCount += cartItems[items][item];
                    }
                }catch (error){

                }
            }
        }
    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
