import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then((response) => setProducts(response.data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <ShopContext.Provider value={{ products }}>
            {children}
        </ShopContext.Provider>
    );
};
