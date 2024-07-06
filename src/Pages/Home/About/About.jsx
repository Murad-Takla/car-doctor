import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero mb-20 ">
            <div className="hero-content flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 relative min-h-[350px]">
                    <img
                        src={person}
                        className="max-w-full lg:max-w-sm rounded-lg shadow-2xl"
                    />
                    <img
                        src={parts}
                        className="hidden lg:block absolute right-7 top-1/2 transform -translate-y-1/2 border-8 max-w-full lg:max-w-sm rounded-sm shadow-2xl"
                    />
                </div>
                <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:ml-10 ">
                    <h1 className="text-3xl lg:text-5xl font-bold">About Us!</h1>
                    <p className="py-6 text-gray-400">
                        Welcome to our Car Service Center! We are dedicated to providing exceptional automotive care and maintenance services to keep your vehicle running smoothly and efficiently. With a passion for cars and a commitment to excellence, we offer a comprehensive range of services designed to meet all your automotive needs.
                    </p>
                    <button className="btn btn-primary">Get more Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
