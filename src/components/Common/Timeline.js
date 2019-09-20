import React, {Component} from 'react'

import image1 from '../assets/img/about/1.jpg'
import image2 from '../assets/img/about/2.jpg'
import image3 from '../assets/img/about/3.jpg'
import image4 from '../assets/img/about/4.jpg'
import TimelineEvent from "./TimelineEvent";

// TODO CURRENTLY BREAKS THE LOOK. FIX IT!.
const events = [
    {title: 'Our Humble Beginnings', date: '2009-2011', image: image1, isInverted: false, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'},
    {title: 'An Agency is Born', date: 'March 2011', image: image2, isInverted: true, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'},
    {title: 'Transition to Full Service', duration: 'December 2012', image: image3, isInverted: false, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'},
    {title: 'Phase Two Expansion', duration: 'July 2014', image: image4, isInverted: true, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'},
]

class Timeline extends Component {
    render() {
        return (
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">About</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="timeline">

                                {events.map((event, index) => {
                                    return <TimelineEvent {...event} key={index} />
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Timeline
