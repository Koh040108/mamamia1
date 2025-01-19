import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ShopContextProvider from './context/ShopContext';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>  {/* Wrap your entire app with Router */}
            <ShopContextProvider>
                <App />
            </ShopContextProvider>
        </Router>
    </StrictMode>
);
