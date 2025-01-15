import React from 'react';
import ServiceBanner from './ServiceDetails/ServiceBanner';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const service = useLoaderData();
    const { title, price } = service;
    return (
        <div className='flex flex-col items-center'>
            <ServiceBanner></ServiceBanner>

            <div className="grid grid-cols-2 grid-rows-5 gap-2 mt-6 w-[85%]">
                <div >
                    <input type="text" placeholder="Your Name" className="input input-bordered w-full " />
                </div>
                <div >
                    <input type="text" placeholder="Contact" className="input input-bordered w-full" />
                </div>
                <div className="row-start-2">
                    <label className="input input-bordered flex items-center gap-2">
                        Service
                        <input type="text" className="grow" placeholder={title} />
                    </label>
                </div>
                <div className="row-start-2">
                    <label className="input input-bordered flex items-center gap-2">
                        Price
                        <input type="text" className="grow" placeholder={price} />
                    </label>
                </div>
                <div className="col-span-2 row-span-2 row-start-3">
                    <textarea
                        placeholder="Special request"
                        className="textarea textarea-bordered textarea-lg w-full"></textarea>
                </div>
                <div className='col-span-2 row-span-1'>
                    <button className='btn w-full bg-orange-500 text-white' type="submit">Proceed</button>
                </div>
            </div>


        </div>
    );
};

export default Checkout;