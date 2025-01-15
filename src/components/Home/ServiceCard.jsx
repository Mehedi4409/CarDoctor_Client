import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, price, img } = service;
    return (
        <div className="card bg-base-100 w-fit shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <div className="card-actions">
                    <p>Price: ${price}</p>
                    <button className="btn btn-circle bg-orange-500 text-white rounded-full">></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;