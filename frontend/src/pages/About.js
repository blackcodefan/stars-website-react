import React, {useEffect} from "react";

import AOS from "aos";
import $ from "jquery";

import HeaderNavbar from "../components/layout/HeaderNavbar";
import SearchBox from "../components/sections/SearchBox";



const About=() => {
    useEffect(() => {
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
    });

    return (
        <header>
            <section className="container-fluid main-background">
                <HeaderNavbar/>
                <SearchBox/>
            </section>
        </header>
    )
}

export default About