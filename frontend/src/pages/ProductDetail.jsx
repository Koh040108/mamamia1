import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams(); // Destructure 'id' from the URL parameters

    console.log("Product ID from URL:", id);  // Check the console to see if it's being logged

    return (
        <div>
            <h1>Product Detail Page</h1>
            <p>Product ID: {id}</p>  {/* Display the product id */}
        </div>
    );
};

export default ProductDetail;
