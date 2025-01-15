import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-8 md:mt-12'>
            {/* text Section */}
            <div className='flex flex-col gap-2 items-center'>
                <h3 className='text-lg font-semibold text-orange-500'>Service</h3>
                <h1 className='text-4xl font-bold'>Our Service</h1>
                <p className='text-center'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            {/* services */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
                {services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
            </div>
            <div className='flex justify-center mt-4'>
                <button className='btn bg-transparent border border-orange-500 text-orange-500'>More Services</button>
            </div>

        </div>
    );
};

export default Service;