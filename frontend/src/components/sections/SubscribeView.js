import React from "react";
import {FormControl, InputGroup} from "react-bootstrap";


class SubscribeView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        return (
            <section className="container-fluid text-left subscribe-background">
                <div className="subscribe container">
                    <h2>Subscribe for the latest news and offers</h2>
                    <div className="row align-items-start">
                        <div className='col-md input-group' id='name'>
                            <input type='text' className="form-control" placeholder="Your Name"/>
                        </div>

                        <div className='col-md input-group' id='email'>
                            <input type='text' className="form-control" placeholder="Your Email Address"/>
                        </div>
                        <div className="col-md">
                            <button type="button" className="btn btn-outline-primary">Sign Up</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SubscribeView;