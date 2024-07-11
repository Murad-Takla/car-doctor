import React, { useContext, useEffect, useState } from 'react';
import CheckoutBanner from '../Checkout/CheckoutBanner';
import img from '../../assets/images/checkout/checkout.png';
import { AuthContext } from '../../Context/MyContext';
import OrderItems from './OrderItems';
import { Link, useNavigate } from "react-router-dom";

const Order = () => {
    const title = 'Orders';
    const { user, LogOut } = useContext(AuthContext);
    const [loader, setLoader] = useState(true);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    const email = user?.email;

    const fetchOrders = () => {
        fetch(`https://genius-car-server-theta-eight.vercel.app/orders?email=${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-car')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    LogOut();
                    navigate('/login');
                }
                return res.json();
            })
            .then(data => {
                setOrders(data);
                setLoader(false);
            })
            .catch(error => {
                console.error("Error fetching orders:", error);
                setLoader(false);
            });
    };

    useEffect(() => {
        fetchOrders()
    }, [email]);

    return (
        <div className="min-h-screen">
            <CheckoutBanner title={title} img={img}></CheckoutBanner>
            {loader ? (
                <div className="my-5 text-center font-semibold text-xl">
                    <span className="loading loading-bars loading-sm"></span>
                </div>
            ) : (
                <div>
                    {orders.length === 0 ? (
                        <div className='my-5 text-center font-semibold text-xl'>
                            Please visit our <Link className='text-blue-700' to={'/'}>services</Link>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr className='text-[16px] '>
                                        <th></th>
                                        <th>Customer Name</th>
                                        <th>Service name </th>
                                        <th>Price</th>
                                        <th>Comment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map(order => (
                                        <OrderItems key={order._id} order={order} fetchOrders={fetchOrders}></OrderItems>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Order;
