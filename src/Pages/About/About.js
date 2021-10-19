import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./About.css"

const About = () => {
    return (
        <div className="about-container">
            <h2 className="heading">We Are Here To  Help You</h2>
            <Container>
                <Row>
                    <Col className="first-col" xs={12} md={6}>
                        <h3>The service is FREE</h3>
                        <p>Building hasbd.com is a continuous process so that we can bring the best results according to the search of our users.The cost and fee for doctor’s visit, hospital service and ambulance hiring are as usual. But the services we provide are definitely free.</p>
                    </Col>
                    <Col className="col-detail" xs={12} md={6}>
                        <h2>Platform for better health</h2>
                        <p>works for the doctors to find patients as well for the patients to find the right doctor and the right hospital services. It tries to build a platform for all – the patients, doctors, hospital owners, healthcare professionals and other health service providers to meet the need of good health for all. A patient can get all types of hospital services, even ambulance, online – that means all types medical services are a click away. This is our endeavor to establish one stop medical platform for everyone in Bangladesh. We believe that our online platform will help millions of people in Bangladesh to take the right decision regarding all sorts of medical and health related issues.</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="col-detail" xs={12} md={6}>
                        <h2>Doctor’s appointment made easy</h2>
                        <p>built with the contents of doctors- made for both doctors and patients. With this digital media, the patients can meet the doctors. The basic purpose of hasbd.com is to make the doctors’ appointment booking easy. All contents of the website are devoted to the wellbeing of patients- to the cure of diseases. The patients can find the right doctors by searching the website’s doctors’ directory, so that they can get the right care at the right time. Not only those, the doctors can attract and engage more patients by building and strengthening their online reputation We have listed all sorts of diseases in the search boxes so that the users can find hasbd.</p>
                    </Col>
                    <Col className="col-detail" xs={12} md={6}>
                        <h3>Get ambulance at your critical time</h3>
                        <p>brings you the first ever online platform for hiring ambulance online in Bangladesh. It reduces the hassles in critical moments. Our team is waiting for your call to have an ambulance in your door at that crucial time. <br /> We have built a network with the ambulance service providers in Bangladesh. We have consulted with them to make the ambulance service process or hiring an ambulance easier and online. We arranged the data in hasbd.com to provide you the ambulance that is nearest you to pick up you and/or someone you love most to your desired destination promptly. The service is 24×7.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;