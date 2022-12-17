import React from "react"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CardNavbar() {
    const pokemonText = "Pokemon TCG";
    const yugiText = "Yu-Gi-Oh! TCG";
    const magicText = "Magic the Gathering";
    const digimonText = "Digimon TCG";
    const finalText = "Final Fantasy TCG"; 

    return (
        <>
            <Navbar bg="light" expand="lg" >
                <Container id="navBarContainer">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="navBarNav">
                        {/* @TODO: CHANGE SIMPLE LINK TO DROPDOWN TO SPECIFIC CARD SETS */}
                        <Nav className="me-auto">
                            <Nav.Link href="#">
                                <p>{pokemonText}</p>
                            </Nav.Link>
                            <Nav.Link href="#">
                                <p>{yugiText}</p>
                            </Nav.Link>
                            <Nav.Link href="#">
                                <p>{magicText}</p>
                            </Nav.Link>
                            <Nav.Link href="#">
                                <p>{digimonText}</p>
                            </Nav.Link>
                            <Nav.Link href="#">
                                <p>{finalText}</p>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default CardNavbar;