import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link
            onClick={() => scrollTo(0, 0)}
            className="text-gray-700 cursor-pointer"
            to={`/product/${id}`}
        >
            {/* Image wrapper with consistent dimensions */}
            <div className="w-full h-48 overflow-hidden rounded-lg">
                <img
                    className="w-full h-full object-cover hover:scale-110 transition ease-in-out"
                    src={image[0]} // Accessing the first image in the array
                    alt={name} // Use the product name as alt text
                />
            </div>
            <p className="pt-3 pb-1 text-sm">{name}</p>
            <p className="text-sm font-medium">
                {currency}
                {price}
            </p>
        </Link>
    );
};

export default ProductItem;
