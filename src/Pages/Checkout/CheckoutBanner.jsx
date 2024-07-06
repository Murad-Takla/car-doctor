import React from 'react';

const CheckoutBanner = ({ img, title }) => {
    
 
    return (
        <div className="relative h-[500px] mx-auto rounded-md">
            <img
                src={img}
                alt="image"
                className="rounded h-full w-full  object-cover object-center  "
            />
            <div className="absolute top-[350px] lg:top-[350px] left-6 max-w-full md:left-20">

                <div className="rounded text-5xl  bg-orange-700 lg:text-7xl font-bold text-black mix-blend-screen px-10 py-5 ">
                    {title}
                </div>
            </div>
        </div>
    );
};

export default CheckoutBanner;