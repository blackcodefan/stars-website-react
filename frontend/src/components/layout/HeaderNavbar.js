import React from "react";

import logo from '../../assets/images/logo-horizontal.png';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import {connect} from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import {history} from "../../_helper/history";
import AOS from "aos";
import $ from "jquery";


class HeaderNavbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        AOS.init({once: true});

        let navElement = $("nav");

        $(function () {
            $(window).scrollTop() > navElement.innerHeight()
                ? navElement.addClass("sticky")
                : navElement.removeClass("sticky");
        });
        $(window).on("scroll", function () {
            $(window).scrollTop() > navElement.innerHeight()
                ? navElement.addClass("sticky")
                : navElement.removeClass("sticky");
        });
    }

    scrollTo = id => e => {
        e.preventDefault();
        scroll.scrollTo({
            duration: 1500,
            delay: 100,
            smooth: "easeInOutQuint",
            containerId: id
        });
    };

    handleNav = key => {
        history.push(`/${key}`)
    }

    render() {

        return (
            <>
                <Navbar bg="none" expand="lg" fixed="top">
                    <Container>
                        <Navbar.Brand
                            href="#home"
                            onClick={this.scrollTo("home")}
                            aria-label="Logo"
                        >
                            <img src={logo} alt="logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <span className="nav-span"/>
                            <span/>
                            <span/>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav
                                //defaultActiveKey="/home"
                                onSelect={ this.handleNav }
                            >
                                <Nav.Item>
                                    <Nav.Link href="/homes">Homes</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Locations">Locations</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Medical">Medical/Corporate</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Services">Services</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Blog">Blog</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="About">About</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Services">Contact</Nav.Link>
                                </Nav.Item>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.authentication.user,
    }
};


export default connect(mapStateToProps)(HeaderNavbar);
