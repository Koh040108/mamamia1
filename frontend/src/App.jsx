import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/AboutUs";
import TermsOfService from "./pages/TermsOfService";
import Privacy from "./pages/PrivacyPolicy";
import Contact from "./pages/ContactUs";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify";
import "./App.css"

const App = () => {
    return (
        <div className="app-container">
            <ToastContainer/>
            <Navbar/>
            <SearchBar/>
            <div className="main-content container">

                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/collection' element={<Collection/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/terms-of-service' element={<TermsOfService/>}/>
                    <Route path='/privacy-policy' element={<Privacy/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/product/:productId' element={<Product/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/place-order' element={<PlaceOrder/>}/>
                    <Route path='/orders' element={<Orders/>}/>
                    <Route path='/verify' element={<Verify/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

export default App;
