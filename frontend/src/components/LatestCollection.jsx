import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import "./Title.css";

const LatestCollection = () => {
    const { products } = useContext(ShopContext); // Access products from context
    console.log(products);
    const [latestProducts, setLatestProducts] = useState([]);

    // Log products to verify data structure and ensure it's being fetched correctly
    useEffect(() => {
        console.log('Products:', products);
    }, [products]);

    // Update latestProducts when products change
    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[products])

    // Show a loading state if products are not loaded yet
    if (!Array.isArray(products) || products.length === 0) {
        return (
            <div className="text-center py-10">
                <p>Loading latest collections...</p>
            </div>
        );
    }

    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <h1 className="text-shadow">-- LATEST COLLECTION  -- </h1>
                    <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                        Explore our latest collection, featuring fresh designs and trendy styles perfect for any occasion. Don’t miss out—Shop now and stay ahead of the trends!
                    </p>
            </div>

            {/* Rendering Products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {latestProducts.map((item, index) => (
                    <ProductItem
                        key={item._id} // Use unique `_id` or fallback to `index`
                        id={item._id } // Adjust to your product data structure
                        image={item.image} // Handle array or string image paths
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default LatestCollection;
