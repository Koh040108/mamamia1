import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/AboutUS";
//import Product from "./pages/Product";
import Collection from "./pages/Collection";


const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100 w-full">
                {/* Navigation Bar */}
                <NavBar />

                {/* Main Content */}
                <main className="container mx-auto px-4 py-6 w-full">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/collection" element={<Collection />}/>



                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
