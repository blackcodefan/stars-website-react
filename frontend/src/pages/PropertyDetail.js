import React from "react";
import HeaderNavbar from "../components/layout/HeaderNavbar";
import SearchBox from "../components/sections/SearchBox";

const PropertyDetail=() => {

    return (
        <header>
            <section className="container-fluid main-background">
                <HeaderNavbar/>
                <SearchBox/>
            </section>
            <section id="about">
                <div className="container">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <h2>Lorem ipsum dolor sit amet</h2>

                </div>
            </section>
        </header>

    )
}

export default PropertyDetail