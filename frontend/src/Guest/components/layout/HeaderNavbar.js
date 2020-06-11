import React from "react";

import Logo from '../../../assets/images/logo-horizontal.png';
import whiteLogo from '../../../assets/images/logo-white.png';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import {connect} from "react-redux";
import {animateScroll as scroll} from "react-scroll";
import {history} from "../../../_helper/history";
import AOS from "aos";
import $ from "jquery";


class HeaderNavbar extends React.Component {
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
        // this.setState({currentPath: history.getCurrentLocation()})

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
        // const {currentPath, currentPropertyId} = this.props
        // const isWhiteLogo = currentPath === `/property/${currentPropertyId}`
        return (
            <>
                <Navbar bg="none" expand="lg" fixed="top" className={this.props.className}>
                    <Container>
                        <Navbar.Brand
                            href="#home"
                            className="site-logo"
                            onClick={this.scrollTo("home")}
                            aria-label="Logo"
                        >
                            <img src={Logo} alt="logo"/>

                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <span className="nav-span"/>
                            <span/>
                            <span/>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav
                                onSelect={this.handleNav}
                            >
                                <Nav.Item>
                                    <Nav.Link
                                              eventKey="Apartments">Apartments</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                              eventKey="Locations">Locations</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                              eventKey="Medical">Medical/Corporate</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                              eventKey="Services">Services</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                              eventKey="Blog">Blog</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                              eventKey="About">About</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                              eventKey="Contact">Contact</Nav.Link>
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
