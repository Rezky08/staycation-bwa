// @flow
import * as React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {ReactComponent as StaycationIcon} from "assets/icons/Staycation.svg";
import style from "assets/css/Landing/Navbar.module.scss"

type Props = {

};
export const LandingNavbar = (props: Props) => {
    return (
        <div className={style['landing-navbar']}>
            <Navbar expand="lg" className={style.navbar}>
                <Container>
                    <Navbar.Brand href="#home"><StaycationIcon/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={["ms-auto",style['nav-navbar']].join(" ")}>
                            <Nav.Link className={style['nav-link']} href="#home">Home</Nav.Link>
                            <Nav.Link className={style['nav-link']} href="#link">Browse by</Nav.Link>
                            <Nav.Link className={style['nav-link']} href="#link">Stories</Nav.Link>
                            <Nav.Link className={style['nav-link']} href="#link">Agents</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};