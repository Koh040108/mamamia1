import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/AboutUS";
import Product from "./pages/Product";
import Collection from "./pages/Collection";
import ProductDetail from "./pages/ProductDetail"; // Import the product detail page
import Footer from "./components/Footer"; // Import the Footer component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify styles

const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100 w-full flex flex-col">
                {/* Navigation Bar */}
                <NavBar />

                {/* ToastContainer for notifications */}
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />

                {/* Main Content */}
                <main className="container mx-auto px-4 py-6 w-full flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/collection" element={<Collection />} />
                        <Route path="/product/:id" element={<ProductDetail />} /> {/* Set up the route */}
                        <Route path="/collection" element={<Collection />}/>
                        <Route path="/product/:id" element={<Product />}/>





                    </Routes>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
};

export default App;