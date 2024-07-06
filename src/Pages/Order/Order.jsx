import React, { useContext, useEffect, useState } from 'react';
import CheckoutBanner from '../Checkout/CheckoutBanner';
import img from '../../assets/images/checkout/checkout.png'
import { AuthContext } from '../../Context/MyContext';
import OrderItems from './OrderItems';
import { Link } from "react-router-dom";

const Order = () => {
    const title = 'Order'
    const { user } = useContext(AuthContext)
    const [loader, setLoader] = useState(true)

    const [orders, setOrders] = useState([])
    const email = user?.email

    const fetchOrders = () => {
        fetch(`https://genius-car-server-theta-eight.vercel.app/orders?email=${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
        setLoader(false)
    }
    useEffect(() => {
        fetchOrders()
    }, [user?.email])

   

    // const loading = <span className="loading loading-bars loading-lg"></span>


    //<span className="loading loading-bars loading-lg"></span>


    return (
        <div className="min-h-screen" >
            <CheckoutBanner title={title} img={img}></CheckoutBanner>

            {
                orders.length == 0 ? <div className='my-5 text-center font-semibold text-xl '>Please visit our <Link className='text-blue-700' to={'/'}>services</Link> </div>
                    : <div className=''>
                        <div className="overflow-x-auto">
                            <table className="table">

                                <thead>
                                    <tr className='text-[16px] '>
                                        <th>

                                        </th>
                                        <th>Customer Name</th>
                                        <th>Service name </th>
                                        <th>Price</th>
                                        <th>Comment</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {loader ? (
                                        <tr>
                                            <td colSpan="5" className="text-center">
                                                {loading}
                                            </td>
                                        </tr>
                                    ) : (
                                        orders.map(order => (
                                            <OrderItems key={order._id} order={order} fetchOrders={fetchOrders}></OrderItems>
                                        ))
                                    )}

                                </tbody>


                            </table>
                        </div>
                    </div>
            }


        </div>
    );
};

export default Order;