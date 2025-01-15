import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id ,title, price, img } = service;
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
                    <Link to={`/details/${_id}`}>
                        <button className="btn btn-sm bg-orange-500 text-white text-sm">View Details</button>
                    </Link>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-sm bg-orange-500 text-white text-sm">Book Now</button>
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default ServiceCard;