import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Reciption = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Link to="/home"><Image style={{width:'400px', margin:"10px"}} src="https://image.freepik.com/free-psd/artistic-concept-with-thank-you-message_23-2148410373.jpg" rounded /></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Reciption;