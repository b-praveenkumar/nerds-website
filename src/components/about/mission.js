import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './styles/mission.css';
import Bubble from './bubble.js';
import calendar_icon from '../../assets/about/calendar.png';
import clubs_icon from '../../assets/about/clubs.png';
import fundraising_icon from '../../assets/about/fundraising.png';
import gear_icon from '../../assets/about/gear.png';
import donate_icon from '../../assets/about/donate.png';

const Mission = () => {
    return (
        <Row>
            <Row>
            <Col xs={11} className="mx-auto content-white-wrapper">
                <Row>
                    <h1 className="text-center mission-title">Our Mission</h1>
                    <p className="text-center">We are a non-profit based in Cincinnati, Ohio who defines a NERD as anyone who desires to learn.  Our mission is to inspire the inner NERD to learn for life through engaging hands-on learning activities. Our NERDLIFE program aims to develop students socially, educationally, and financially through core four principals: Social Development, Leadership Development, Self-Care, and Financial Literacy.</p>
                </Row>
                <Row className="mt-2">
                    <h1 className="mt-4 text-center story-title">Our Story</h1>
                </Row>
                <Row>
                    <Col className="text-center">
                        <img src={calendar_icon} alt="Calendar Icon" className="about-icon"/>
                    </Col>
                    <Col className="text-center">
                        <Bubble content="Coach Tee kick-started her after school clubs, beginning with book club. She Surveyed her middle school students and they expressed a lot of interest, but were fearful of working with the high school students. She created a separate program for the middle schoolers. The clubs began to flourish and participation skyrocketed." />
                        <h2 className="story-bubble-title mt-2">Clubs</h2>
                    </Col>
                    <Col className="text-center">
                        <img src={fundraising_icon} alt="Fundraising Icon" className="about-icon"/>
                    </Col>
                    <Col className="text-center">
                        <Bubble content="Using her background in STEM education, she started the NERDLIFE program. This included programs such as book club, garden club, robotics club, and the birth of chem-fun kits. Creativity, literacy, and fun were infused in all of these clubs." />
                        <h2 className="story-bubble-title mt-2">NERDLIFE</h2>
                    </Col>
                    <Col className="text-center">
                        <img src={donate_icon} alt="Donate Icon" className="about-icon"/>
                    </Col>
                </Row>
                <Row className="story-timeline m-3">
                    <Col className="text-center">
                        <h2 className="story-timeframe">2012</h2>
                    </Col>
                    <Col className="text-center">
                        <h2 className="story-timeframe">2016-2017</h2>
                    </Col>
                    <Col className="text-center">
                        <h2 className="story-timeframe">2018</h2>
                    </Col>
                    <Col className="text-center">
                        <h2 className="story-timeframe">2019</h2>
                    </Col>
                    <Col className="text-center">
                        <h2 className="story-timeframe">2020-Now</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <h2 className="story-bubble-title mb-2">The Beginning</h2>
                        <Bubble content="The dream started when Coach Tee was an academic advisor and basketball coach. She saw there was a need for change in early education. Although she could’t afford the early learning center she dreamed of, she focused on where she could make a difference." />
                    </Col>
                    <Col className="text-center">
                        <img src={clubs_icon} alt="Calendar Icon" className="about-icon"/>
                    </Col>
                    <Col className="text-center">
                        <h2 className="story-bubble-title mb-2">Fundraising</h2>
                        <Bubble content="As Coach Tee’s clubs started to grow in attendance, she realized she wouldn’t be able to supply the find alone anymore. She started fundraising and as it proved successful she realized she had something special - NERDS! She decided it was time to make things official and register NERDS as a non-profit." />
                    </Col>
                    <Col className="text-center">
                        <img src={gear_icon} alt="Fundraising Icon" className="about-icon"/>
                    </Col>
                    <Col className="text-center">
                        <h2 className="story-bubble-title mb-2">Moving Forward</h2>
                        <Bubble content="NERDS continues to fulfill its mission - to inspire the inner nerd to learn for life. Everyone is a nerd in Coach Tee’s eyes. Being a nerd means having a passion for anything. We want to help students find and share their passions and gifts with the world. We are now looking into plans for an early learning center." />
                    </Col>
                </Row>
            </Col>
            </Row>
        </Row>
    );
}

export default Mission;