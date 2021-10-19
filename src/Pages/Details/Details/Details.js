import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const {doctorId} = useParams();
    return (
        <div>
            <h1>Digital Health Care Clinic</h1>
            <h4>Name: {doctorId}</h4>
            <Link to="/riciption"><button className="btn btn-warning my-3">Confirm Now</button></Link>
        </div>
    );
};

export default Details;