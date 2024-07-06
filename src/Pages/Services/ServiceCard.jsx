import React from 'react';
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service;

    return (
        <div
            className="lg:w-[350px] h-[500px] mt-10 mx-auto border rounded-2xl hover:shadow-md flex flex-col mb-4"
        >
            <div className='p-4 flex flex-col h-full'>
                <img
                    src={img}
                    className="shadow rounded-lg overflow-hidden border w-full h-[290px]"
                />
                <div className="mt-2 flex-grow">
                    <h4 className="font-bold text-xl">{title}</h4>
                    <p className="mt-2 text-gray-400 font-semibold">
                        Price : {price} BDT
                    </p>
                </div>
                <div className="mt-auto mb-2 flex justify-center">
                    <Link to={`/service/${_id}`}>
                        <button className="btn btn-outline btn-secondary ">Booking</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
