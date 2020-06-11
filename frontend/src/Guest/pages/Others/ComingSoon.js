import React from "react";
import HeaderNavbar from "../../components/layout/HeaderNavbar";
import Footer from "../../components/layout/Footer";


class ComingSoon extends React.Component {
    render() {
        return (
            <header>
                <section className="container-fluid main-background-2">
                    <HeaderNavbar/>
                </section>
                <div className="container mb-lg-5">
                   <h1> Coming Soon...</h1>
                </div>
                <Footer/>
            </header>
        )
    }


}

export default ComingSoon