import React from 'react';
import { Link } from 'react-router-dom';
import "./Doctor.css"

const Doctor = ({doctor}) => {
    const { name, degree, exper, ConsultationFee, ChamberTime, img} = doctor;
    return (
        <div className="doctor-container">
            <img className="w-50 mt-3" src={img} alt="" />
            <h2>{name}</h2>
            <p>{degree}</p>
            <h4>Exper: {exper}</h4>
            <h>Fee: {ConsultationFee}</h>
            <br />
            <h>Time: {ChamberTime}</h> <br />
            <Link to={`/details/${name}`}><button className="btn btn-warning mt-2">advance serial</button></Link>
        </div>
    );
};

export default Doctor;