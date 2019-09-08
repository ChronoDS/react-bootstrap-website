import React from 'react'
import Header from "../Common/Header";
import image from '../assets/img/header-bg.jpg'

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
            </div>
        )
    }
}

export default Home;
