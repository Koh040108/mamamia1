import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Orders = () => {
    const { token } = useContext(ShopContext); // Get the user token from context for authentication
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch orders on component mount
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setLoading(true);
                const response = await axios.get('/api/orders', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (response.data.success) {
                    setOrders(response.data.orders);
                } else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                console.error('Failed to fetch orders:', error);
                toast.error('An error occurred while fetching orders.');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [token]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='py-10'>
            <h1 className='text-2xl mb-4 font-medium'>Your Orders</h1>
            {orders.length === 0 ? (
                <div>No orders found</div>
            ) : (
                <div>
                    {orders.map((order, index) => (
                        <div key={index} className='border-b py-4'>
                            <div className='flex justify-between'>
                                <div>
                                    <h3 className='font-semibold'>Order #{order._id}</h3>
                                    <p className='text-gray-500'>Placed on {new Date(order.createdAt).toLocaleDateString()}</p>
                                </div>
                                <div>
                                    <p className='text-gray-500'>Total: RM {order.totalAmount.toFixed(2)}</p>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <h4 className='font-medium'>Items:</h4>
                                {order.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className='flex justify-between'>
                                        <p>{item.name} ({item.size})</p>
                                        <p>Qty: {item.quantity}</p>
                                        <p>Price: RM {item.price.toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>
                            <Link to={`/order-details/${order._id}`} className='text-blue-500 mt-3 inline-block'>
                                View Order Details
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Orders;
