import React, {useState} from "react";
import linkedIn_icon from '../../assets/about/linkedin.png';
import close_icon from '../../assets/close.png';
import Modal from 'react-modal';
import './styles/card.css';

const Card = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const card_open = () => {
        if(isOpen){
            setIsOpen(false);
        }else {
            setIsOpen(true);
        }
    }

    return (
        <div>
            <div className="card-container text-center" onClick={card_open}>
                <img src={props.picture_url} className="profile-picture" alt={"Profile picture for " + props.name} />
                <a href={props.linkedIn_url} onClick={(event) => event.stopPropagation() /* don't open the modal */}>
                    <img src={linkedIn_icon} className="linkedIn_icon mt-2" alt={"LinkedIn profile for " + props.name} />
                </a>
                <h3 className="card-name">{props.name}</h3>
                <h4 className="position">{props.position}</h4>
            </div>
            <Modal isOpen={isOpen} closeTimeoutMS={500}>
                <div className="bio-modal">
                    <div className="d-flex">
                        <div className="flex-grow-1"></div>
                        <img className="close-icon mt-4" src={close_icon} onClick={() => setIsOpen(false)} alt="Close" />
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Card;