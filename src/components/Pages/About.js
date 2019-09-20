import React, {Component} from 'react';
import Header from "../Common/Header";
import image from '../assets/img/about.jpg'
import Timeline from "../Common/Timeline";
import Team from "../Common/Team";

class About extends Component {
    render() {
        return (
            <div>
                <Header
                    title={'About Us'}
                    subtitle={'IT\'S Really A Great Story'}
                    image={image}
                    willShowLink={false}
                />
                <Timeline />
                <Team />
            </div>
        )
    }
}

export default About;
