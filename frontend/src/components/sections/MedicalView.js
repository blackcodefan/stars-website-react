import React from "react";
import doctor from "../../assets/images/doctor.jpg"


class MedicalView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <section className="container-fluid blue-background medical-travel">
                <h2 className="text-center">Medical Travel</h2>
                <div className="row container">
                    <div className="stay-image col-md">
                        <img src={doctor} alt="doctor"/>
                    </div>
                    <div className="col-md">
                        <p>Many of our rentals are close to the Longwood Medical Area or the ‘medical mecca’. We provide
                            a
                            quick and
                            easy access to some of the most world-renowned hospitals, specialists and teaching
                            facilities
                            like the
                            Dana Farber Cancer Institute, Boston Children’s Hospital or Mass General.</p>
                        <p>
                            Whether your stay is short term or extended; we host traveling nurses, patient families and
                            medical
                            professionals, in clean, fully furnished, well-appointed units in some of the best locations
                            throughout
                            the city, offering the perfect hotel alternative.</p>
                        <button type="button" className="btn btn-outline-light">Explore our apartments</button>
                    </div>
                </div>
            </section>


        )
    }
}

export default MedicalView;