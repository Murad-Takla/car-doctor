import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/MyContext';
import { toast } from "react-hot-toast";

const CheckoutForm = ({ service }) => {
  
    
    const { user } = useContext(AuthContext)
  
    const { title, _id } = service
  

    const checkoutFormHandler = (event) => {
        event.preventDefault()
        const form = event.target

        const name = `${form.firstName.value} ${form.lastName.value} `
        const email = user?.email || 'not registered yet'
        const price = service.price
        const details = form.serviceDetails.value

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            details,
            email
        }


        fetch('https://genius-car-server-theta-eight.vercel.app/orders', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
               console.log(data)
                toast.success('order is confirmed');
                form.reset()
            })



    }

    return (
        <div>

            <div className="bg-white  border-2 rounded-lg shadow relative m-10">
                <div className="flex items-start justify-between p-5 border-b rounded-t">
                    <h3 className="text-xl font-semibold text-gray-500">Service Name:  {title}</h3>

                </div>
                <div className="p-6 space-y-6">
                    <form
                        onSubmit={checkoutFormHandler}
                    >
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label

                                    className="text-sm font-medium text-gray-900 block mb-2"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                    placeholder="first name"
                                    required
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label

                                    className="text-sm font-medium text-gray-900 block mb-2"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                    placeholder="last name"
                                    required
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label

                                    className="text-sm font-medium text-gray-900 block mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                    placeholder="first name"
                                    readOnly
                                    defaultValue={user?.email}
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label

                                    className="text-sm font-medium text-gray-900 block mb-2"
                                >
                                    Price
                                </label>
                                <input
                                    type="text"
                                    name="price"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                    placeholder="first name"
                                    required
                                    readOnly
                                    defaultValue={service.price + ' BDT'}
                                />
                            </div>
                            <div className="col-span-full">
                                <label

                                    className="text-sm font-medium text-gray-900 block mb-2"
                                >
                                    Service Details
                                </label>
                                <textarea

                                    required
                                    name='serviceDetails'
                                    rows={6}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                                    placeholder="write your opinion here . . ."
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                        <div className="pt-5 border-t border-gray-200 rounded-b">
                            <button
                                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="submit"
                            >
                                Confirm
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default CheckoutForm;