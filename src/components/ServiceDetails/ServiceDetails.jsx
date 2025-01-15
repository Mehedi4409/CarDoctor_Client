import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceBanner from './ServiceBanner';
import ServiceFacilityCard from './ServiceFacilityCard';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { title, img, price, description, facility } = service;
    return (
        <div className='flex flex-col items-center'>
            
            <ServiceBanner></ServiceBanner>

            <div className='grid grid-cols-5 mt-8 md:w-[85%] '>
                {/* details grid */}
                <div className='col-span-3 space-y-6'>
                    <img className='w-full' src={img} alt="" />
                    <h1 className='text-4xl font-bold'>{title}</h1>
                    <p>{description}</p>
                    <div className='grid grid-cols-2 gap-2'>
                        {facility.map(oneFacility =><ServiceFacilityCard oneFacility={oneFacility}></ServiceFacilityCard>)}
                    </div>
                    <h3 className='text-lg font-bold'>Get this Service only for <span className='text-orange-500'>${price}</span></h3>
                </div>
                {/* additional grid */}
                <div className='col-span-1'></div>
            </div>
        </div>
    );
};

export default ServiceDetails;