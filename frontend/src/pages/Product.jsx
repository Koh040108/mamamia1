import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import RelatedProducts from "../components/RelatedProducts"; // Ensure the path is correct


const Product = () => {
    const { id } = useParams(); // Ensure this matches your route param
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [image, setImage] = useState("");

    useEffect(() => {
        console.log("Products:", products);
        console.log("Product ID from useParams:", id);

        const product = products.find((item) => item.id === parseInt(id));
        console.log("Product Found:", product);

        if (product) {
            setProductData(product);
            setImage(product.image); // Assume product.image is a string for the main image
        }
    }, [id, products]);

    if (!productData) {
        return (
            <div className="text-center py-10">
                <p>Loading product details...</p>
            </div>
        );
    }

    return (
        <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 container mx-auto">
            {/* Product Data */}
            <div className="flex gap-12 flex-col sm:flex-row">
                {/* Product Images */}
                <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                    <div className="flex sm:flex-col overflow-auto sm:overflow-y-scroll justify-between sm:justify-start sm:w-[18.7%] w-full">
                        {/* Example for multiple images (if productData.image is an array) */}
                        {Array.isArray(productData.image) ? (
                            productData.image.map((item, index) => (
                                <img
                                    onClick={() => setImage(item)}
                                    src={item}
                                    key={index}
                                    className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                                    alt={`Product thumbnail ${index + 1}`}
                                />
                            ))
                        ) : (
                            <img
                                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                                src={productData.image}
                                alt="Product"
                            />
                        )}
                    </div>
                    <div className="w-full sm:w-[80%]">
                        <img className="w-full h-auto" src={image} alt={productData.name} />
                    </div>
                </div>

                {/* Product Info */}
                <div className="flex-1">
                    <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
                    <div className="flex items-center my-3">
                        {[...Array(5)].map((_, index) => (
                            <img
                                src="/assets/staricon.png" // Adjust path to your star icon
                                alt={`Star ${index + 1}`}
                                className="w-5 h-5"
                                key={index}
                            />
                        ))}
                        <p className="pl-2 text-gray-500">(69)</p>
                    </div>
                    <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
                    <p className="mt-5 text-gray-500 md:w-4/5">
                        {productData.description || "No description available."}
                    </p>
                    <div className="mt-6">
                        <button onClick={()=>addToCart(productData.id)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>
                            ADD TO CART
                        </button>
                    </div>
                    <hr className='mt-8 sm:w-4/5'/>
                    <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                        <p>100% Original and Homemade Product</p>
                        <p>Cash On Delivery is Available</p>
                        <p>Easy Return and Exachange Policy within 7 days</p>
                    </div>
                </div>
            </div>
            {/*Description&Review*/}
            <div className='mt-20'>
                <div className='flex'>
                    <b className='border px-5 py-3 text-sm'>Descrption</b>
                    <p className='border px-5 py-3 text-sm'>Review (69)</p>
                </div>
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                    <p>Empower B40 single mothers by supporting their journey towards financial independence. Through</p>
                    <p>the sale of their handmade products, we aim to provide them with a sustainable source of income</p>
                    <p>while raising funds to improve their livelihoods. Every purchase helps create opportunities, foster</p>
                    <p>dignity, and build brighter futures for these resilient women.</p>
                </div>

            </div>
            {/*related*/}
            <RelatedProducts category={productData.category}/>
        </div>
    );
};

export default Product;
