import React from "react";
import HeaderNavbar from "../../components/layout/HeaderNavbar";
import Footer from "../../components/layout/Footer";
import Typical from 'react-typical'


class ComingSoon extends React.Component {
    render() {
        return (
            <header>
                <section className="container-fluid main-background-2">
                    <HeaderNavbar/>
                </section>
                <div className="container mb-lg-5" style={{height: '400px', display: 'flex', alignItems: 'center'}}>
                    <Typical
                        steps={['Page is', 3000, 'Coming Soon...', 3000]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </div>
                <Footer/>
            </header>
        )
    }


}

export default ComingSoon