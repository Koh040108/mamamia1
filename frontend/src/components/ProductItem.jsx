import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);
    console.log("Product ID in ProductItem:", id);  // This will log the id passed to the component

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductItem = ({ id, name, price, image }) => {
    return (
        <div className="border rounded p-4">
            {/* Wrap image with Link */}
            <Link to={`/product/${id}`}>
        <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
            <div className="overflow-hidden">
                <img
                    className="hover:scale-110 transition ease-in-out"
                    src={image}
                    alt={name}
                    className="w-full h-40 object-cover rounded mb-4 cursor-pointer"
                />
            </Link>
            <h3 className="text-lg font-semibold">
                <Link to={`/product/${id}`}>{name}</Link>
            </h3>
            <p className="text-gray-700">Price: {price}</p>
        </div>
            </div>
            <p className="pt-3 pb-1 text-sm">{name}</p>
            <p className="text-sm font-medium">{currency}{price}</p>
        </Link>
    );
};

ProductItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
};

export default ProductItem;
