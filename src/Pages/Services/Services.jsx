import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([])

    const [loading, setLoading] = useState(true)


    // fetch('https://genius-car-server-theta-eight.vercel.app/services')
    //     .then(response => response.json())
    //     .then(data => {
    //         // handle the data
    //         console.log(data)
    //     })
    //     .catch(error => {
    //         console.error('Error fetching services:', error);
    //     });


    useEffect(() => {
        fetch('https://genius-car-server-theta-eight.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setServices(data)
            })
    }, [])

    return (
        <div id="services-section" >
            <h5 className=" text-center mt-[100px]  text-5xl font-bold leading-tight text-[#FD6F54]">
                Our Services
            </h5>
            {
                loading ? <div className='text-center my-5'><span className="loading loading-bars loading-md"></span>
                </div> :
                    <>
                        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 mb-6 px-[16px] gap-5 container mx-auto' >

                            {
                                services.map(service => <ServiceCard key={service._id} service={service} ></ServiceCard>)
                            }
                        </div>
                    </>
            }

        </div>
    );
};

export default Services;