import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const OrderItems = ({ order, fetchOrders }) => {
    const [orderInfo, setOrderInfo] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ serviceName: '', details: '' });

    const { details, customer, service, price, serviceName, email, _id } = order;

    useEffect(() => {
        fetch(`https://genius-car-server-theta-eight.vercel.app/service/${service}`)
            .then(res => res.json())
            .then(data => setOrderInfo(data));
    }, [service]);

    const deleteOrderHandler = (id) => {
        const agree = window.confirm(`Are you sure to delete ${serviceName}`);

        if (agree) {
            fetch(`https://genius-car-server-theta-eight.vercel.app/orders/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(order),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success(`${serviceName} Successfully deleted!`);
                        fetchOrders();  // Re-fetch orders after deletion
                    }
                });
        }
    };

    const handleDetailsClick = () => {
        setModalContent({ serviceName, details });
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <tr>
                <th>
                    <button
                        onClick={() => deleteOrderHandler(_id)}
                        className="btn btn-square btn-outline">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src={orderInfo.img} alt="IMG" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{customer}</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <td>{serviceName}</td>
                <td>{price} BDT</td>
                <th>
                    <button onClick={handleDetailsClick} className='btn btn-ghost'>Details</button>
                </th>
            </tr>
            {showModal && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Service Name: {modalContent.serviceName}</h3>
                        <p className="py-4">Your comments: <span className='text-gray-500'>{modalContent.details}</span></p>
                        <div className="modal-action">
                            <button onClick={closeModal} className="btn btn-circle btn-outline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default OrderItems;
