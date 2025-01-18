import React from "react";
import PropTypes from "prop-types";

const ProductItem = ({ id, name, price, image }) => {
    return (
        <div className="border rounded p-4">
            <img src={image} alt={name} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-700">Price: {price}</p>
        </div>
    );
};

// Define prop types for better debugging and maintenance
ProductItem.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
};

export default ProductItem;
