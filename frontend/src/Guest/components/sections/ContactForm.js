import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';


class ContactForm extends React.Component {
    // state = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     message: '',
    // }
    //
    // handleChange = (e) => {
    //     this.setState({[e.target.name]: e.target.value})
    // }
    //
    // static validateEmail(email) {
    //     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //     return re.test(email)
    // }
    //
    // handleEmailChange = (e) => {
    //     const email = e.target.value
    //     const emailValid = ContactForm.validateEmail(email)
    //
    //     this.setState({
    //         email: e.target.value,
    //         valid: emailValid
    //     })
    // }
    //
    // handleSubmit = (e) => {
    //
    // }

    render() {
        return (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: '',
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                        .required('First Name is required'),
                    lastName: Yup.string()
                        .required('Last Name is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    message: Yup.string()
                        .required('message is required'),
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
                render={({errors, status, touched}) => (
                    <Form className="contact-form">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="col-md input-group">
                                    <Field name="firstName" type="text" placeholder="   Firs tName"
                                           className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : ' mb-3')}/>
                                    <ErrorMessage name="firstName" component="div" className="invalid-feedback"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="col-md input-group">
                                    <Field name="lastName" type="text" placeholder="   Last Name"
                                           className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : ' mb-3')}/>
                                    <ErrorMessage name="lastName" component="div" className="invalid-feedback"/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="col-md input-group">
                                    <Field name="email" type="text" placeholder="   Your Email"
                                           className={'form-control' + (errors.email && touched.email ? ' is-invalid' : ' mb-3')}/>
                                    <ErrorMessage name="email" component="div" className="invalid-feedback"/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="col-md input-group">
                                    <Field name="message" type="text" placeholder="   Your Message"
                                           className={'form-control' + (errors.message && touched.message ? ' is-invalid' : ' mb-3')}/>
                                    <ErrorMessage name="message" component="div" className="invalid-feedback"/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="col-md input-group">
                                    <button type="submit" className="btn btn-outline-primary pull-left">Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )
                }
            />
        )
    }

};

export default ContactForm;
