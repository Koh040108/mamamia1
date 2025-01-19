import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {
    const { getCartAmount, currency, delivery_fee } = useContext(ShopContext); // Use getCartTotal from context

    const cartTotal = getCartAmount(); // Calculate cart total

    // Safeguard against NaN values
    const displayTotal = isNaN(cartTotal) ? 0 : cartTotal;

    return (
        <div className="p-4 border rounded shadow-md text-gray-700">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>
                    {currency}
                    {cartTotal.toFixed(2)}
                </span>
            </div>
            <div className="flex justify-between mb-2">
                <span>Delivery Fee:</span>
                <span>
                    {currency}
                    {delivery_fee.toFixed(2)}
                </span>
            </div>
            <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>
                    {currency}
                    {(cartTotal + delivery_fee).toFixed(2)}
                </span>
            </div>
        </div>
    );
};

export default CartTotal;
