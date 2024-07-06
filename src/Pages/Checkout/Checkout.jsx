import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutBanner from './CheckoutBanner';
import { AuthContext } from '../../Context/MyContext';
import CheckoutForm from './CheckoutForm';

const Checkout = () => {
    const service = useLoaderData()
    const {img} = service
    const { user } = useContext(AuthContext)
    // console.log(user)

    const title = 'Check out'
    // console.log(service)
    return (
        <div className=' p-5 '>

            <CheckoutBanner img={img} title={title}></CheckoutBanner>
            <CheckoutForm service={service} ></CheckoutForm>


        </div>
    );
};

export default Checkout;