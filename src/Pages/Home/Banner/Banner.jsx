import React from 'react';
import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
import banner5 from '../../../assets/images/banner/5.jpg'
import banner6 from '../../../assets/images/banner/6.jpg'
import Slider from './Slider';



const Banner = () => {

    const sliderData = [
        {
            id: 1,
            next: 2,
            bannerImg: banner1,
            prev: 6
        },
        {

            id: 2,
            next: 3,
            bannerImg: banner2,
            prev: 1
        },
        {
            id: 3,
            next: 4,
            bannerImg: banner3,
            prev: 2
        },
       
        {
            id: 4,
            next: 5,
            bannerImg: banner5,
            prev: 3
        },
        {
            id: 5,
            next: 1,
            bannerImg: banner6,
            prev: 4
        },
    ]


    return (
        <div className="carousel   mt-10 w-full ">
            {
                sliderData.map(slide => <Slider
                    key={slide.id}
                    slide={slide}
                ></Slider>)
            }
        </div>
    );
};

export default Banner;