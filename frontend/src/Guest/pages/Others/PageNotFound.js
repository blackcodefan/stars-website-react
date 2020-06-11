import React from "react";
import HeaderNavbar from "../../components/layout/HeaderNavbar";


class PageNotFound extends React.Component {
    render() {
        return (
            <header>
                <section className="container-fluid main-background-2">
                    <HeaderNavbar/>
                </section>
                <div className="container">
                   <h1> Page not found...</h1>
                </div>
            </header>
        )
    }


}

export default PageNotFound