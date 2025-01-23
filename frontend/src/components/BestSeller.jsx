import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const BestSeller = () => {
    // Access the products from the ShopContext
    const { products } = useContext(ShopContext);

    // Ensure products is defined and is an array
    if (!products || !Array.isArray(products)) {
        return (
            <div className="text-center py-10">
                <p>Loading best sellers...</p>
            </div>
        );
    }

    // Filter best sellers
    const bestSellers = products.filter(product => product.bestseller);

    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <h2 className="text-gray-700">Best Sellers</h2>
                    <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                        Shop our best sellers—<></>op-rated and most-loved items, chosen by you. Find the perfect picks everyone’s raving about!
                    </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {bestSellers.map((item) => (
                    <ProductItem
                        key={item._id}
                        id={item._id}
                        image={item.image} // assuming image is an array
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default BestSeller;
