import React, { useEffect, useState } from 'react'
import Doctor from '../Doctor/Doctor';
import "./Doctors.css"

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() =>{
        fetch('fakeData.JSON')
        .then(res => res.json())
        .then(data => setDoctors(data));
    },[])
    return (
       <div>
             <div>
            <h1 className="header py-2">Our Doctors</h1>
        </div>
        <div className="doctors-container">
            {
                doctors.map(doctor=> <Doctor  key={doctor.id} doctor={doctor}></Doctor>)
            }
        </div>
       </div>
    );
};

export default Doctors;