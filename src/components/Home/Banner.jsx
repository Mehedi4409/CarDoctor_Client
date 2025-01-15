import React from 'react';

const imageLinks = {
    image1: "https://i.ibb.co.com/D9YLL1y/6.jpg",
    image2: "https://i.ibb.co.com/qrzcRVT/1.jpg",
    image3: "https://i.ibb.co.com/18jj1tg/2.jpg",
    image4: "https://i.ibb.co.com/r5thZLk/3.jpg",
    image5: "https://i.ibb.co.com/807YhYC/4.jpg",
    image6: "https://i.ibb.co.com/K2zgYq7/5.jpg",
};

const Banner = () => {
    const imageArray = Object.values(imageLinks); // Get the array of image URLs

    return (
        <div className="h-screen flex justify-center">
            <div className="carousel size-[85%]">
                {imageArray.map((image, index) => {
                    const prevIndex = (index - 1 + imageArray.length) % imageArray.length;
                    const nextIndex = (index + 1) % imageArray.length;
                    return (
                        <div
                            key={index}
                            id={`slide${index + 1}`}
                            className="carousel-item relative w-full bg-gradient-to-r from-indigo-500"
                        >
                            <img src={image} className="w-full h-full object-cover" />
                            <div className='absolute left w-full space-y-4 bg-gradient-to-r from-black flex flex-col justify-center text-white h-full'>
                                <div className='absolute left-6 w-full space-y-4 '>
                                    <h1 className='text-5xl w-1/3 font-bold'>Affordable Price For Car Servicing</h1>
                                    <p className='w-1/3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                    <div className='space-x-4'>
                                        <button className='btn bg-orange-700 text-white'>Discover More</button>
                                        <button className='btn bg-transparent text-white'>Recent Project</button>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-4 right-4 space-x-2">
                                <a href={`#slide${prevIndex + 1}`} className="btn btn-circle">
                                    ❮
                                </a>
                                <a href={`#slide${nextIndex + 1}`} className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Banner;
