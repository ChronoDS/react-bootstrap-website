import React from 'react'
import Header from "../Common/Header";
import image from '../assets/img/header-bg.jpg'
import Services from "../Common/Services"; // Re-usable components.
import Portfolio from "../Common/Portfolio";
import Team from "../Common/Team";
import Timeline from "../Common/Timeline"; // Re-usable components.

class Home extends React.Component {

    render() {

        return (
            <div>
                <Header
                    title={'Welcome To Our Studio!'}
                    subtitle={'IT\'S NICE TO MEET YOU'}
                    image={image}
                    willShowLink={true}
                    link={'/services'}
                    linkText={'Tell me more'}
                />

                <Services />
                <Portfolio />
                <Timeline />
                <Team />
            </div>
        )
    }
}

export default Home;
