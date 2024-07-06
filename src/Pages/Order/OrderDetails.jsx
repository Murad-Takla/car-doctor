import React from 'react';

const OrderDetails = ({ info}) => {
    const {details , serviceName} = info
    
    console.log(details , serviceName)
    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Service Name: {serviceName}</h3>
                <p className="py-4">Your comments : <span className='text-gray-500'>{details}</span></p>
                <div className="modal-action">
                    <form method="dialog">

                        <button className="btn btn-circle btn-outline">
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
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default OrderDetails;