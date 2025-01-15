import React from 'react';

const ServiceFacilityCard = ({ oneFacility }) => {
    const { name, details } = oneFacility;
    return (
        <div className="card bg-base-100 w-fit shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default ServiceFacilityCard;