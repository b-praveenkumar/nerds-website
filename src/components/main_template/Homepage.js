import React from "react";
import Container from 'react-bootstrap/Container';
import Header from "./header";
import { Outlet } from 'react-router-dom';

// ! This components should be used as default template and all the child components will be rendered here

const Homepage = () => {
    return (
        <Container fluid>
            <Header/>
            <Outlet />
        </Container>
    );
}

export default Homepage;