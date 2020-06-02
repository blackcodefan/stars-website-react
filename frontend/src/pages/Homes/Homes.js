import React from "react";

import SearchBox from "../../components/sections/SearchBox";
import SolutionView from "../../components/sections/SolutionView";
import HeaderNavbar from "../../components/layout/HeaderNavbar";
import ExperienceView from "../../components/sections/ExperienceView";
import StayView from "../../components/sections/StayView";
import LocationView from "../../components/sections/LocationView";
import MedicalView from "../../components/sections/MedicalView";
import HousingView from "../../components/sections/HousingView";
import GuestReviewsView from "../../components/sections/GuestReviewsView";
import SubscribeView from "../../components/sections/SubscribeView";

class Homes extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
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
}


export default Homes