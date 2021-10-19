import React from 'react';
import "./Facility.css"

const Facility = () => {
    return (
        <div>
            <h1 className="m-4">Our Facilities</h1>
            <h4  className="facility-container">Facility</h4>
            <div className="facility-container">
                <ul>
                    <li><p>24 Hour on-site physician and emergency service.</p></li>
                    <li><p>Specialist Medicine/Surgical/Orthopedics/ENT/     Paediatrician/Hepatology/ Respiratoy/ Obs-Gynae Service.</p></li>
                    <li><p>Laboratory and Radiology with 4D Sonography services.    </p></li>
                    <li><p>Elective and 24 hours Emergency Theatre Service</p></li>
                    <li><p>24 hours Ambulance service.</p></li>
                    <li><p>Free vaccination service.</p></li>
                    <li><p>Free Friday out patients clinic</p></li>
                    <li><p> Skilled Nursing.</p></li>
                </ul>
            </div>

            <div>
                <h4 className="facility-container">Lab Info</h4>
               <div className="facility-container">
                 <ul>
                    <li><p>Gyne & Obs</p></li>
                    <li><p>Cardiology</p></li>
                    <li><p>General</p></li>
                    <li><p>Cath Lab</p></li>
                 </ul>
               </div>
            </div>

            <div>
                <h4 className="facility-container">Lab Info</h4>
                <div className="facility-container">
                    <ul>
                        <li><p>A/C</p></li>
                        <li><p>VIP Cabin</p></li>
                        <li><p>Cabin</p></li>
                        <li><p>Ward (Male/Female)</p></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Facility;