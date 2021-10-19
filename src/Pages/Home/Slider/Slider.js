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
                        src="https://i.ibb.co/0BjHfL6/slider-6.jpg"
                        alt="First slide"/>

                    <Carousel.Caption>
                        <h3 className="slide-header">Welcome to our website</h3>
                        <h6 className="discription">Our clinic is conducted by experienced doctors. We are at your service.</h6>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 py-4"
                        src="https://i.ibb.co/xYvLJgm/slider-5.jpg"
                        alt="Second slide"/>
                    <Carousel.Caption>
                        <h3 className="slide-header">Welcome to our Website</h3>
                        <h6 className="discription">Our clinic is conducted by experienced doctors. We are at your service.</h6>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 py-4"
                        src="https://i.ibb.co/r6DmC4D/slider-4.jpg"
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