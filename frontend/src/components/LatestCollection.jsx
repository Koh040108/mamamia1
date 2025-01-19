import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title.jsx";
// Import ProductItem
import ProductItem from "./ProductItem";

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProduct, setLatestProduct] = useState([]);

    useEffect(() => {
        // Check if products exist before slicing
        if (products?.length) {
            setLatestProduct(products.slice(0, 10));
        }
    }, [products]);

    return (
        <div className="my-10">
            {/* Title Section */}
            <div className="text-center py-8 text-3xl">
                <Title text1={"LATEST"} text2={"COLLECTION"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Discover our latest collection
                </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {latestProduct.map((item, index) => (
                    <ProductItem
                        key={index}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default LatestCollection;
