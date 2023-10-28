import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './styles/Caterpillar.css'
import paypalLogo from '../../assets/paypal-logo.png';
import venmologo from '../../assets/venmo-logo.png'
import cashapplogo from '../../assets/cashapp-logo.png'
import coachtee from '../../assets/about/profiles/lily_maynard.png'

const Donate = () => {
    return (
        
        <Row className="donate">
            <Row>
            <Col xs={11} className="mx-auto content-white-wrapper">
                <Row>
                    <h1 className="text-center mission-title">Donate</h1>   
                </Row>
                <Row className="paragraph-row"> 
                <p className="text-center">Help us continue inspiring the inner NERD of the youth in our community. Support academic enrichment for students in underserved communities by donating today. We accept donations through PayPal, Venmo, and Cash App. All donations are tax-deductible.</p>
                </Row>
                <div className = "blue-box-container">
                    <div className="nerds_decs_blue">
                    <a href="https://paypal.me/NERDSCincinnati?country.x=US&locale.x=en_US" target="_blank" rel="noreferrer">
                    <img src={paypalLogo} alt="PayPal Logo" className="paypal-logo" />
                    </a>
                    </div>
                    <div className="nerds_decs_blue">
                    <a href="https://www.venmo.com/u/NERDS-NERDLIFE" target="_blank" rel="noreferrer">
                    <img src={venmologo} alt="Venmo Logo" className="venmo-logo" />
                    </a>
                    </div>
                    <div className="nerds_decs_blue">
                    <a href="https://cash.app/$NERDS18" target="_blank" rel="noreferrer">
                    <img src={cashapplogo} alt="CashApp Logo" className="cashapp-logo" />
                    </a>
                    </div>
                </div>
                <div className="image-container">
                    <div className="image-with-text">
                    <img src={coachtee} alt="pic1" className="coach_tee" />
                    <p className="paragraph-content"><span className="highlight">514</span><br/>Students Served</p>
                    </div>
                    <div className="image-with-text">
                    <img src={coachtee} alt="pic1" className="coach_tee" />
                    <p className="paragraph-content"><span className="highlight">48</span><br/>College credits earned by <br/> high school students</p>
                    </div>
                    <div className="image-with-text">
                    <img src={coachtee} alt="pic1" className="coach_tee" />
                    <p className="paragraph-content"><span className="highlight">226</span><br/>Volunteers helping inspire the <br/> inner nerd</p>
                    </div>
                    </div>
                
                   </Col>
            </Row>


         
        </Row>
    );
}

export default Donate;