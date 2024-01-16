import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/MyNavbar.css';
import 'animate.css'

function MyNavbar() {

    const [expanded, setExpanded] = useState(false);

    const handleNavbarToggle = (expanded) => {
        setExpanded(expanded);
    };


    return (
        <header>
            <Navbar
                expand="lg"
                fixed="top"
                expanded={expanded}
                className={`animate__animated animate__fadeIn bg-custom${expanded ? '-expanded' : ''}`}
                onToggle={handleNavbarToggle}
            >
                <Container className="nav-container">
                    <Navbar.Brand href="#home" className={`navbar-brand${expanded ? '-expanded' : ''}`}>
                        &lt;Hansol Lee /&gt;
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className={`nav-link${expanded ? '-expanded' : ''}`} href="#home">Home</Nav.Link>
                            <Nav.Link className={`nav-link${expanded ? '-expanded' : ''}`} href="#about">About</Nav.Link>
                            <Nav.Link className={`nav-link${expanded ? '-expanded' : ''}`} href="#skills">Skills</Nav.Link>
                            <Nav.Link className={`nav-link${expanded ? '-expanded' : ''}`} href="#projects">Projects</Nav.Link>
                            <Nav.Link className={`nav-link${expanded ? '-expanded' : ''}`} href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default MyNavbar;