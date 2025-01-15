import React from 'react';

const ServiceBanner = () => {
    return (
        <div className='relative flex justify-center items-center rounded-lg'>
            {/* Wrapper */}
            <div className='relative'>
                {/* Gradient Layer */}
                <div className='absolute inset-0 bg-gradient-to-r from-black via-transparent rounded-lg to-black opacity-50 z-10'></div>

                {/* Image Layer */}
                <img className='z-0' src="https://i.ibb.co.com/f9qcGJ0/Rectangle-1539.png" alt="Banner" />

                {/* Button Layer */}
                <button className='absolute bottom-0 w-96 left-1/2 transform -translate-x-1/2 z-20 bg-orange-500 text-white px-6 py-3 rounded'>
                    Home/Service
                </button>
            </div>
        </div>
    );
};

export default ServiceBanner;
