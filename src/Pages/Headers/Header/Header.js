import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import "./Header.css"

const Header = () => {
    const {user,logOut} = UseAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Toggle />
                    <div>
                        <h2 className="website-name">Popular Hospital</h2>
                        </div>
                    <Navbar.Collapse className="justify-content-center">
                        <Link  className='nav-link' to="/home">Home</Link>
                        <Link  className='nav-link' to="/about">About</Link>
                        <Link  className='nav-link' to="/facility">Facility</Link>
                        {user?.email ? <Button onClick={logOut} variant="light">Logout</Button> : <Link className="login-btn" to ="/login">Login</Link>}
                        <Navbar.Text><a href="#login"> {user?.displayName}</a></Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;