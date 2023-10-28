import React, {useState, useRef, useEffect} from "react";
import './styles/Header.css';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import fb_icon from '../../assets/Facebook.png';
import instagram_icon from '../../assets/Instagram.png';
import email_icon from '../../assets/mail-send-envelope--envelope-email-message-unopened-sealed-close.png';
import donate_icon from '../../assets/donate.png';
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menu_open = () => {
        if(isOpen){
            setIsOpen(false);
        }else {
            setIsOpen(true);
        }
    }

    const useOutsideClick = ref => {
        useEffect(() => {

            // FN that will handle click event outside of the component
            const handleClickOutside = event => {
                if(ref.current && !ref.current.contains(event.target)){
                    if(!isOpen) {
                        setIsOpen(false);
                    }
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);

            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };

        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef);

    return (
        <div className="header">
            <Nav className="justify-content-end icons_menu fixed-top">
                {/* This is left hambuger menu, which will be displaying blue bar navigation so users can navigate through pajges */}
                <div className="clickOutsideWrapper" ref={wrapperRef}>
                    <div className={isOpen ? "hamburger_icon_hide" : "hamburger_icon_show"} onClick={menu_open}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>

                    {/* full expanded blue menu */}
                    <div className={isOpen ? 'blue_left_nav_opened' : 'blue_left_nav_closed'}>
                        <div className="navigation_menu">
                            <Nav.Item>
                                <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                            </Nav.Item>

                            <Dropdown as={NavItem}>
                                <Dropdown.Toggle as={NavLink}>About Us</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item><Link className="dropdown_links" to='/about/mission'>Mission</Link></Dropdown.Item>
                                    <Dropdown.Item><Link className="dropdown_links" to='/about/team'>Team</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Nav.Item>
                                <Nav.Link><Link to='/activities'>Activities</Link></Nav.Link>
                            </Nav.Item>

                            <Dropdown as={NavItem}>
                                <Dropdown.Toggle as={NavLink}>Get Involved</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item><Link className="dropdown_links" to='/involve/donate'>Donate</Link></Dropdown.Item>
                                    <Dropdown.Item><Link className="dropdown_links" to='/involve/volunteer'>Volunteer</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Nav.Item>
                                <Nav.Link><Link to='/account_portal'>Account Portal</Link></Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link><Link to='/contact'>Contact Us</Link></Nav.Link>
                            </Nav.Item>
                        </div>

                        <div className="chevron_menu" onClick={menu_open}>
                            <span className="chevron left"></span>
                            <span className="chevron left"></span>
                        </div>

                    </div>
                </div>

                {/* This is right navigation, which will link the icons to respective social media, e-mail and donate links */}
                <Nav.Item>
                    <Nav.Link href="https://www.instragram.com/inspiringtheinnernerd" target="_blank">
                        <OverlayTrigger key="bottom" placement="bottom" overlay={
                            <Tooltip>
                                Follow us on Instagram
                            </Tooltip>
                        }>
                            <img className="menu_icons" src={instagram_icon} alt="NERDS Instagram"/>
                        </OverlayTrigger>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://www.facebook.com/InspiringtheinnerNERD" target="_blank">
                        <OverlayTrigger key="bottom" placement="bottom" overlay={
                            <Tooltip>
                                Like us on Facebook
                            </Tooltip>
                        }>
                            <img className="menu_icons" src={fb_icon} alt="NERDS Facebook"/>
                        </OverlayTrigger>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="mailto:">
                        <OverlayTrigger key="bottom" placement="bottom" overlay={
                            <Tooltip>
                                Send us an e-mail
                            </Tooltip>
                        }>
                            <img className="menu_icons" src={email_icon} alt="NERDS E-mail" target="_blank"/>
                        </OverlayTrigger>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">
                        <OverlayTrigger key="bottom" placement="bottom" overlay={
                            <Tooltip>
                                Donate to us
                            </Tooltip>
                        }>
                            <img className="menu_icons" src={donate_icon} alt="NERDS Donate" target="_blank"/>
                        </OverlayTrigger> 
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Header;
