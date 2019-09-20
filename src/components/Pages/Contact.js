import React, {Component} from 'react'
import Field from "../Common/Field";
import {withFormik} from "formik";
import * as Yup from 'yup'

const fields = {
    sections: [
        [
            {name: 'name', elementName: 'input', type: 'text', placeholder: 'Your Name'},
            {name: 'email', elementName: 'input', type: 'email', placeholder: 'Your Email'},
            {name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your Phone'}
        ],
        [
            {name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Your Message'}
        ]
    ]
}

class Contact extends Component {

    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <form name="sentMessage" noValidate="novalidate" onSubmit={this.props.handleSubmit}>
                                <div className="row">

                                    {fields.sections.map((section, sectionIndex) => {
                                        return (
                                            <div className={'col-md-6'} key={sectionIndex}>
                                                {section.map((field, index) => {
                                                    return <Field
                                                        {...field}
                                                        key={field.name+index}
                                                        value={this.props.values[field.name]}
                                                        name={field.name}
                                                        onChange={this.props.handleChange}
                                                        onBlur={this.props.handleBlur}
                                                        touched={(this.props.touched[field.name])}
                                                        errors={(this.props.errors[field.name])}
                                                    />
                                                })}
                                            </div>
                                        )
                                    })}
                                    <div className="clearfix" />
                                    <div className="col-lg-12 text-center">
                                        <div id="success" />
                                        <button id="sendMessageButton"
                                                className="btn btn-primary btn-xl text-uppercase"
                                                type="submit"
                                        >Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(4, 'Please state your full name.')
            .required('Name is a required field.'),
        email: Yup.string()
            .email('Please provide a valid email.')
            .required('Email needed in order to reply to your message.'),
        phone: Yup.string()
            .min(10, 'Number is too short. Please provide a valid phone number')
            .max(15, 'Number is too long. Please provide valid phone number.')
            .required('Phone number is needed to reach you at.'),
        message: Yup.string()
            .min(100, 'Please specify a more detailed message.')
            .required('Please state your message.'),
    }),
    handleSubmit: (values, {setSubmitting}) =>  {
        alert("You've submitted the form: "+JSON.stringify(values));
    }
})(Contact);
