import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Collection = () => {
    const { products, addToCart, currency } = useContext(ShopContext);

    return (
        <div style={styles.collectionContainer}>
            <h1 style={styles.title}>Our Products</h1>
            <div style={styles.productsGrid}>
                {products && products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} style={styles.productCard}>
                            <img
                                src={product.image}
                                alt={product.name}
                                style={styles.productImage}
                            />
                            <h2 style={styles.productName}>{product.name}</h2>
                            <p style={styles.productPrice}>
                                {currency} {product.price.toFixed(2)}
                            </p>
                            <button
                                style={styles.addButton}
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))
                ) : (
                    <p style={styles.emptyMessage}>No products available.</p>
                )}
            </div>
        </div>
    );
};

// Inline styles for demonstration (can be replaced with CSS/SCSS)
const styles = {
    collectionContainer: {
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
    },
    productsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px",
    },
    productCard: {
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        textAlign: "center",
    },
    productImage: {
        width: "100%",
        height: "150px",
        objectFit: "cover",
        borderRadius: "8px",
    },
    productName: {
        fontSize: "18px",
        margin: "10px 0",
    },
    productPrice: {
        fontSize: "16px",
        color: "#333",
        marginBottom: "10px",
    },
    addButton: {
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        padding: "10px 15px",
        cursor: "pointer",
    },
    emptyMessage: {
        textAlign: "center",
        fontSize: "18px",
        color: "#666",
    },
};

export default Collection;
