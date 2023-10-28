import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './styles.css';
import create_icon from "../../assets/Creativity.png";
import lit_icon from "../../assets/Literacy.png";
import stem_icon from "../../assets/Stem.png";
import active_icon from "../../assets/Active.png";
import past_icon from "../../assets/Past.png";
import future_icon from "../../assets/Future.png";

let status_icon;
let focus_icon;

const ActivityTile = ({ data }) => {
    if (data.status.toLowerCase() === "past") {
        status_icon = past_icon;
    } else if (data.status.toLowerCase() === "future") {
        status_icon = future_icon;
    } else {
        status_icon = active_icon;
    }
    if (data.focus.toLowerCase() === "literacy") {
        focus_icon = lit_icon;
    } else if (data.focus.toLowerCase() === "creativity") {
        focus_icon = create_icon;
    } else {
        focus_icon = stem_icon;
    }

    return (
        <Col lg={5} md={6} sm={7} xs={8} id="middle_pink_activity_wrapper" className="mx-auto">
            <h1 className="nerds_activity_heading text-center">{data.name}</h1>
            <Row>
                <Col>
                    <div className="nerds_decs_blue">
                        <p className="nerds_decs_red_program">
                        <img className="activity_icons" type="image/png" src={status_icon} alt="Status icon"/>
                            Program Status: {data.status}
                        <img className="activity_icons" type="image/png" src={focus_icon} alt="Focus icon"/>
                        </p>
                    </div>
                    <p className="nerds_decs_red_program text-center">{data.description}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="nerds_decs_blue">
                        <p className="nerds_decs_red_program text-center">
                            Focus
                        </p>
                    </div>
                    <p className="nerds_decs_red_program text-center">{data.focus}</p>
                </Col>
                <Col>
                    <div className="nerds_decs_blue">
                        <p className="nerds_decs_red_program text-center">
                            Goals
                        </p>
                    </div>
                    <p className="nerds_decs_red_program text-center">{data.goals}</p>
                </Col>
            </Row>
            </Col>
    );
}

export default ActivityTile;