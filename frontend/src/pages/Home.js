import React, {useEffect} from "react";
import AOS from "aos";
import $ from "jquery";

import SearchBox from "../components/sections/SearchBox";
import SolutionView from "../components/sections/SolutionView";
import HeaderNavbar from "../components/layout/HeaderNavbar";
import ExperienceView from "../components/sections/ExperienceView";
import StayView from "../components/sections/StayView";
import LocationView from "../components/sections/LocationView";
import MedicalView from "../components/sections/MedicalView";
import HousingView from "../components/sections/HousingView";
import GuestReviewsView from "../components/sections/GuestReviewsView";
import SubscribeView from "../components/sections/SubscribeView";

const Home = () => {
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
        <>
            <header>
                <section className="container-fluid main-background">
                    <HeaderNavbar/>
                    <SearchBox/>
                </section>
            </header>
            <SolutionView/>
            <ExperienceView/>
            <StayView/>
            <LocationView/>
            <MedicalView/>
            <HousingView/>
            <LocationView/>
            <GuestReviewsView/>
            <SubscribeView/>
        </>
    )
}

export default Home