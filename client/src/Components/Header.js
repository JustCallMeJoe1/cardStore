import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import '../Static/css/header.css';

function Header() {
    const siteTitle = "Gladiator Card Database"
    const siteStatement = "The best place to find trading card information!"

    return (
        <>
            <Container fluid id="headerContainer">
                <Row className="justify-content-md-center">
                    <Col md="auto" id="mainLogo">
                        <img src="/images/logo.png" alt="Card Database logo" width="150" height="150" />
                    </Col>
                    <Col xs={6}> 
                        <h1 className="mainText">{siteTitle}</h1>
                        <h5 className="mainText">{siteStatement}</h5>
                    </Col>        
                        
                    <Col id="externalLinks">
                        <img src="/images/youtubeLogo.png" alt="Youtube Channel" width="60" height="45" id="ytLogo" />
                        <img src="/images/facebookLogo.png" alt="Facebook Page" width="80" height="50" id="fbLogo" />
                        <img src="/images/twitterLogo.png" alt="Twitter Page" width="50" height="35" id="twLogo" />
                    </Col>

                    <Col xs={1}>
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                <img src="/images/defaultUser.png" alt="Default User" width="45" height="45" id="twLogo" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu id="userLoginOptions">
                                <Dropdown.Item href="#/login" id="registerOption">Login</Dropdown.Item>
                                <Dropdown.Item href="#/register" id="loginOption">Register</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Header;