import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "RM";
    const delivery_fee = 10;

    // State for cart items
    const [cartItems, setCartItems] = useState({});

    // State for orders
    const [orders, setOrders] = useState([]);

    // State for search functionality
    const [searchTerm, setSearchTerm] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    // Fetch orders from API or local storage
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get("/api/orders"); // Adjust API endpoint
                setOrders(response.data.orders || []);
            } catch (error) {
                console.error("Failed to fetch orders:", error);
            }
        };
        fetchOrders();
    }, []);

    // Function to calculate the total number of items in the cart
    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            for (const size in cartItems[itemId]) {
                totalCount += cartItems[itemId][size];
            }
        }
        return totalCount;
    };

    // Function to calculate the total price of items in the cart
    const getCartTotal = () => {
        let totalPrice = 0;
        for (const itemId in cartItems) {
            const product = products.find((item) => item._id === itemId);
            if (product) {
                for (const size in cartItems[itemId]) {
                    totalPrice += product.price * cartItems[itemId][size];
                }
            }
        }
        return totalPrice;
    };

    // Function to add an item to the cart
    const addToCart = (itemId, size) => {
        setCartItems((prevCartItems) => {
            const updatedCart = { ...prevCartItems };

            // Initialize item if it doesn't exist
            if (!updatedCart[itemId]) {
                updatedCart[itemId] = {};
            }

            // Update size quantity or initialize it
            if (updatedCart[itemId][size]) {
                updatedCart[itemId][size] += 1;
            } else {
                updatedCart[itemId][size] = 1;
            }

            return updatedCart;
        });
    };

    // Function to remove an item from the cart
    const removeFromCart = (itemId, size) => {
        setCartItems((prevCartItems) => {
            const updatedCart = { ...prevCartItems };
            if (updatedCart[itemId]?.[size] > 1) {
                updatedCart[itemId][size] -= 1;
            } else {
                delete updatedCart[itemId][size];
                if (Object.keys(updatedCart[itemId]).length === 0) {
                    delete updatedCart[itemId];
                }
            }
            return updatedCart;
        });
    };

    // Function to update item quantity
    const updateQuantity = (itemId, size, quantity) => {
        setCartItems((prevCartItems) => {
            const updatedCart = { ...prevCartItems };
            if (quantity > 0) {
                updatedCart[itemId] = { ...(updatedCart[itemId] || {}), [size]: quantity };
            } else {
                delete updatedCart[itemId][size];
                if (Object.keys(updatedCart[itemId]).length === 0) {
                    delete updatedCart[itemId];
                }
            }
            return updatedCart;
        });
    };

    // Provide context values
    const value = {
        currency,
        delivery_fee,
        products, // Products array
        cartItems,
        setCartItems,
        orders,
        setOrders,
        getCartCount, // Provide cart count function
        getCartTotal, // Provide total cart value function
        addToCart, // Add item to cart
        removeFromCart, // Remove item from cart
        updateQuantity, // Update item quantity
        searchTerm,
        setSearchTerm, // Search functionality
        showSearch,
        setShowSearch, // Control search bar visibility
    };

    return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
