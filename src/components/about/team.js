import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from './card.js';
import coach_tee_icon from '../../assets/about/profiles/coach_tee.png';
import lily_maynard_icon from '../../assets/about/profiles/lily_maynard.png';
import './styles/team.css';

const Team = () => {
    return (
        <Row>
            <Row>
            <Col xs={11} className="mx-auto content-white-wrapper">
                <Row>
                    <h1 className="text-center team-title">Meet the Team</h1>
                </Row>
                <Row className="mt-4">
                    <h2 className="text-center board-title">Board of Directors</h2>
                </Row>
                <Row>
                    <Col xs ={3}>
                        <Card name="Tonkia Bridges" position="Coach Tee CEO/ Founder of NERDS President of BoD" linkedIn_url="https://www.linkedin.com/in/tonkia-bridges-b55065123" picture_url={coach_tee_icon}>
                        </Card>
                    </Col>
                    <Col>
                    </Col>
                    <Col xs ={3}>
                        <Card name="Anastasiya Chapko" position="Vice President Secretary of BoD" linkedIn_url="https://www.linkedin.com/in/anachapko" picture_url={lily_maynard_icon}>
                        </Card>
                    </Col>
                    <Col>
                    </Col>
                    <Col xs ={3}>
                        <Card name="Lily Maynard" position="BoD member" linkedIn_url="https://www.linkedin.com/in/lilymaynard" picture_url="https://media-exp1.licdn.com/dms/image/C5603AQHEI4LY_eKBHA/profile-displayphoto-shrink_200_200/0/1529001472819?e=2147483647&v=beta&t=52Rt-8LGHYXOcz_h-MZIrNCohhHrpaHnkNhlmhBS-k8">
                        </Card>
                    </Col>
                    </Row>
                    <Row>
                    <Col xs ={3}>
                        <Card name="Michael Lander" position="BoD member" linkedIn_url="https://www.linkedin.com/in/mike-lander-i-7630b0a8" picture_url="https://media-exp1.licdn.com/dms/image/C5603AQHEI4LY_eKBHA/profile-displayphoto-shrink_200_200/0/1529001472819?e=2147483647&v=beta&t=52Rt-8LGHYXOcz_h-MZIrNCohhHrpaHnkNhlmhBS-k8">
                        </Card>
                    </Col>
                </Row>
            </Col>
            </Row>
        </Row>
    );
}

export default Team;