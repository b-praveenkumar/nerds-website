import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './styles.css';
import ActivityTile from "./activity-tile.js";
import Header from "../main_template/header";
import stem_icon_black from "../../assets/stem_icon_black.png";
import lit_icon_black from "../../assets/literacy_icon_black.png";
import create_icon_black from "../../assets/creativity_icon_black.png";
import { activities } from './activities-list.js';

let filteredActivities = [];

//set which keeps track of selected filter values
let selectedOptions = new Set();

const Activities = () => {
    const [activitiesList, setActivitiesList] = useState(activities);

    /* 
    fn: called whenever a filter is selected; won't apply changes until the filter button is clicked
    args: value is the argument provided by the input element in the HTML - it is a string representation of the filter category
    */
    const handleChange = (value) => () => {
        if (!selectedOptions.has(value)) {
            selectedOptions.add(value);
            filteredActivities = [];
        } else {
            selectedOptions.delete(value);
            filteredActivities = [];
        }
    
        //if filters are still applied, re-filter the list
        if (selectedOptions.size > 0) {
            filteredActivities = activities.filter((activity) => {
                return (
                    (selectedOptions.has('STEM') && activity.focus === 'STEM') ||
                    (selectedOptions.has('Literacy') && activity.focus === 'Literacy') ||
                    (selectedOptions.has('Creativity') && activity.focus === 'Creativity')
                );
            });
        }
         else {
            filteredActivities = activities;
        }
        return filteredActivities;
    };

    /*
    handleFilter is called whenever the filter button is clicked. It sets the activitiesList based on the
    logic performed by the handleChange function above.
    */
    const handleFilter = () => {
        setActivitiesList(filteredActivities);
    }

    return (
        <Container fluid>
            <Header />
            <Col lg={9} md={10} sm={11} xs={12} id="middle_white_wrapper" className="mx-auto">
                <h1 className="nerds_activities_heading text-center">Activities</h1>
                <Row>
                    <Col>
                <div className="category_filter">
                    <input className="largerCheckbox" type="checkbox" value="STEM" onClick={handleChange('STEM')} />STEM
                    <img className="category_label" type="image/png" src={stem_icon_black} alt="Stem Icon Black"/>
                </div>
                </Col>
                <Col>
                <div className="category_filter">
                    <input className="largerCheckbox"  type="checkbox" value="Literacy" onClick={handleChange('Literacy')} />Literacy
                    <img className="category_label" type="image/png" src={lit_icon_black} alt="Literary Icon Black" />
                </div>
                </Col>
                <Col>
                <div className="category_filter">
                    <input className="largerCheckbox"  type="checkbox" value="Creativity" onClick={handleChange('Creativity')} />Creativity
                    <img className="category_label" type="image/png" src={create_icon_black} alt="Creativity Icon Black" />
                </div>
                </Col>
                <Col>
                <div className="filter_button">
                    <button value="Filter" onClick={handleFilter}>Filter</button>
                </div>
                </Col>
                </Row>
                <Row>
                    {
                        activitiesList.map((activity, index) => {
                            //if there are at least 2 activities in the list, create a row with them
                            //the index % 2 will skip the next element in the list so it isn't displayed twice 
                            if (index % 2 === 0 && index + 1 < activitiesList.length) {
                                return (
                                    <Row>
                                        <ActivityTile data={activity} key={index} />
                                        <ActivityTile data={activitiesList[index+1]} key={index+1} />
                                    </Row>
                                )
                            }
                            //if the list has an odd number of elements and we're at the last one, add it to a row by itself
                            else if (activitiesList.length % 2 !== 0 && index === activitiesList.length - 1) {
                                return <Row><ActivityTile data={activity} key={index} /></Row>
                            }
                            return <></>;
                        })
                                
                    };
                </Row>
            </Col>
        </Container>
    );
}

export default Activities;