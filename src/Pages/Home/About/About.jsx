import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero mb-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative min-h-[350px]'>
                    <img
                        src={person}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <img
                        src={parts}
                        className="absolute  right-7 top-1/2 border-8 lg:max-w-sm rounded-sm shadow-2xl"
                    />
                </div>
                <div className='w-1/2  mt-10'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get more Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;