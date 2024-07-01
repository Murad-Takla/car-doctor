import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h5 className=" text-center mb-2 mt-[100px]  text-5xl font-bold leading-tight text-[#FD6F54]">
               Our Services
            </h5>
            <div className='grid grid-cols-1 lg:grid-cols-3  mb-6  gap-4 container mx-auto' >

                {
                    services.map(service => <ServiceCard key={service._id} service={service} ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;