import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Slider.css"
// import {slide4} from "../../../images/slider/slider-4.jpg";
// import {slide5} from "../../../images/slider/slider-5.jpg";
// import {slide6} from "../../../images/slider/slider-6.jpg";

const Slider = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 py-4"
                        src="https://image.freepik.com/free-photo/successful-medical-team_329181-9252.jpg?fbclid=IwAR2l0KPk4Y2UIr56Xe9N8wDgQ7BO25VGOCZ1SF2GnzvRNsjE2tsppHbEQjs"
                        alt="First slide"/>

                    <Carousel.Caption>
                        <h3 className="slide-header">Welcome to our website</h3>
                        <h6 className="discription">Our clinic is conducted by experienced doctors. We are at your service.</h6>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 py-4"
                        src="https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg?size=338&ext=jpg&fbclid=IwAR3DauPkzI1a47cc4T4E-CMt9FcuG21bNHsJVFswNP7jx-R2F-TkX6Lvc3Y"
                        alt="Second slide"/>
                    <Carousel.Caption>
                        <h3 className="slide-header">Welcome to our Website</h3>
                        <h6 className="discription">Our clinic is conducted by experienced doctors. We are at your service.</h6>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 py-4"
                        src="https://image.freepik.com/free-vector/surgical-lab-illustrated-background_52683-68262.jpg?fbclid=IwAR3cqA6jGtimfPVrTGSYjUagIbTxLd5ubeOiCSZbDmWr6H5q9eCWPteM5A8"
                        alt="Third slide"/>

                    <Carousel.Caption>
                        <h3 className="slide-header">Welcome to our Website</h3>
                        <h6 className="discription">Our clinic is conducted by experienced doctors. We are at your service.</h6>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Slider;