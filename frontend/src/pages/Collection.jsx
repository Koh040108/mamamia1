import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title"; // Adjust path
import ProductItem from "../components/ProductItem"; // Adjust path

const Collection = () => {
    const { products = [], currency = "RM" } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProduct, setFilterProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [sortType, setSortType] = useState("relevant");

    const toggleCategory = (e) => {
        const value = e.target.value;
        setCategory((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const applyFilter = () => {
        let productsCopy = products.slice();
        if (category.length > 0) {
            productsCopy = productsCopy.filter((item) => category.includes(item.category));
        }
        setFilterProduct(productsCopy);
    };

    const sortProducts = () => {
        let fpCopy = [...filterProduct];
        switch (sortType) {
            case "low-high":
                setFilterProduct(fpCopy.sort((a, b) => a.price - b.price));
                break;
            case "high-low":
                setFilterProduct(fpCopy.sort((a, b) => b.price - a.price));
                break;
            default:
                applyFilter();
                break;
        }
    };

    useEffect(() => {
        setFilterProduct(products);
    }, [products]);

    useEffect(() => {
        applyFilter();
    }, [category]);

    useEffect(() => {
        sortProducts();
    }, [sortType]);

    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
            {/* Filters Section */}
            <div className="min-w-60">
                <p
                    className="my-2 text-xl flex items-center cursor-pointer gap-2"
                    onClick={() => setShowFilter(!showFilter)}
                >
                    FILTERS
                </p>
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
                    <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        {/* Category Buttons */}
                        <button
                            className={`py-1 px-3 border border-gray-300 rounded ${
                                category.includes("Totes") ? "bg-blue-500 text-white" : "bg-white text-blue-500"
                            }`}
                            value="Totes"
                            onClick={toggleCategory}
                        >
                            Totes
                        </button>
                        <button
                            className={`py-1 px-3 border border-gray-300 rounded ${
                                category.includes("Soap") ? "bg-blue-500 text-white" : "bg-white text-blue-500"
                            }`}
                            value="Soap"
                            onClick={toggleCategory}
                        >
                            Soap
                        </button>
                        <button
                            className={`py-1 px-3 border border-gray-300 rounded ${
                                category.includes("Candle") ? "bg-blue-500 text-white" : "bg-white text-blue-500"
                            }`}
                            value="Candle"
                            onClick={toggleCategory}
                        >
                            Candle
                        </button>
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    <Title text1={"ALL"} text2={"COLLECTIONS"} />
                    <select
                        onChange={(e) => setSortType(e.target.value)}
                        className="border-2 border-gray-300 text-sm px-2"
                    >
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {filterProduct.length > 0 ? (
                        filterProduct.map((item) => (
                            <ProductItem key={item.id} name={item.name} id={item.id} price={item.price} image={item.image} />
                        ))
                    ) : (
                        <p>No products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Collection;
