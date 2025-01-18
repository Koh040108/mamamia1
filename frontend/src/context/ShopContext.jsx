import { createContext } from "react";
import { products } from "../assets/asssts";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "RM"; // Define constants
    const delivery_fee = 10;

    const value = {
        products,
        currency,
        delivery_fee,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
