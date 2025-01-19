import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const BestSeller = () => {
    // Access the products from the ShopContext
    const { products } = useContext(ShopContext);

    // Filter best sellers
    const bestSellers = products.filter(product => product.bestseller);

    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <h2 className="text-gray-700">Best Sellers</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {bestSellers.map((item) => (
                    <ProductItem
                        key={item._id}
                        id={item._id}
                        image={item.image[0]} // assuming image is an array
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default BestSeller;
