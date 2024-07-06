import React from 'react';
import './Banner.css';

const Slider = ({ slide }) => {
    const { bannerImg, id, next, prev } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full mb-8  "> {/* Added margin bottom */}
            <div className='img-gradient'>
                <img src={bannerImg} className="w-full object-cover h-96 sm:h-auto rounded-lg" alt="Banner" />
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-8 sm:left-16 md:left-24 top-1/4">
                <h1 className='text-2xl sm:text-4xl md:text-6xl font-bold text-white'>
                    Affordable <br />
                    Price for Car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-3/4 sm:w-2/3 md:w-2/5 left-8 sm:left-16 md:left-24 top-1/2 ">
                <p className='text-sm sm:text-lg md:text-xl text-white'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-3/4 sm:w-2/3 md:w-2/5 left-8 sm:left-16 md:left-24 top-3/4 space-x-4"> {/* Added space between buttons */}
                <button className="btn btn-warning mr-2 sm:mr-5 mb-2 sm:mb-0">Discover More </button>
                <button className="btn btn-outline btn-warning">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-2 sm:left-5 right-2 sm:right-5 bottom-0 space-x-4"> {/* Added space between buttons */}
                <a href={`#slide${prev}`} className="btn btn-circle mr-2 sm:mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle bg-yellow-400 text-white">❯</a>
            </div>
        </div>
    );
};

export default Slider;
