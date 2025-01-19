import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductItem = ({ id, name, price, image }) => {
    return (
        <div className="border rounded p-4">
            {/* Wrap image with Link */}
            <Link to={`/product/${id}`}>
                <img
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
    );
};

ProductItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
};

export default ProductItem;
