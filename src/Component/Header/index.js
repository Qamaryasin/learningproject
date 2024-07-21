import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import { LuLogIn } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import Image from 'react-bootstrap/Image';
import './index.css'

import Cardd from '../HeroCard';

function Com() {

    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        console.log('Logging in with:', email, password);
        // Close modal after handling login
        setShowModal(false);
    };
    return (
        <>
            <Navbar expand="lg" className="nav_color">
                <Container fluid>
                    <Navbar.Brand href="#"><img src='./assest/image/logo-white.png'></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className='Toggle' />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto main-nav"
                        >
                            <Nav.Link href="#action1" className='nav-text' >Home</Nav.Link>
                            <Nav.Link href="#action2" className='nav-text' >About Us</Nav.Link>
                            <Nav.Link href="#action3" className='nav-text'>Service</Nav.Link>
                            <Nav.Link href="#action4" className='nav-text'>Contact</Nav.Link>
                            <Nav.Link href="#action5" className='nav-text'>Special Deals</Nav.Link>
                            <Nav.Link onClick={() => setShowModal(true)} href="#action6" className='nav-text'>LogIn <FaUserCircle />
                            </Nav.Link>

                        </Nav>
                        <FaCartArrowDown style={{ width: '30px', height: '30px', color: 'red' }} /> <br></br>
                        <button className='support-btn'>Support</button>

                        {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
                    </Navbar.Collapse>

                </Container>
            </Navbar>

            {/* Model BOx */}

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="button" onClick={handleLogin}>
                            Login
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

        </>
    );
}

export default Com;