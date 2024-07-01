import React from 'react';

const ServiceCard = ({ service }) => {
    const { img, title, price } = service
    // console.log(service)
    return (

        <div
            className=" mt-4 container mx-auto p-6 w-[450px] border rounded-2xl  hover:shadow-md flex flex-col  mb-4"
        >
            <img
                src={img}
                className="shadow rounded-lg overflow-hidden border w-[490px] h-[290px] "
            />
            <div className="mt-8 ">
                <h4 className="font-bold text-xl">{title}</h4>
                <p className="mt-2 text-gray-600">
                    Price : ${price} 
                </p>
                <div className="mt-5">
                <button className="btn btn-outline btn-secondary">Booking</button>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;