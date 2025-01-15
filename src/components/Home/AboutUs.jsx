import React from 'react';

const imageLinks = {
    personImage: "https://i.ibb.co.com/gjbyMPF/person.jpg",
    partsImage: "https://i.ibb.co.com/JtqfYQR/parts.jpg",
};


const AboutUs = () => {
    return (
        <div className='w-full flex flex-col md:flex-row gap-4'>
            {/* picture part */}
            <div className='md:w-1/2 relative'>
                <img className='w-11/12' src={imageLinks.personImage} alt="" />
                <img className='absolute border-white border-8 right-0 bottom-0 w-[40%]' src={imageLinks.partsImage} alt="" />
            </div>
            {/* text part */}
            <div className='md:w-1/2 space-y-4'>
                <h3 className='text-orange-500 font-semibold'>About Us</h3>
                <h1 className='text-4xl font-bold'>We are qualified & of experience in this field</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='btn bg-orange-600 text-white'>Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;