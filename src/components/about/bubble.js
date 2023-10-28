import React, {useState} from "react";
import './styles/bubble.css';
import arrow_icon from '../../assets/about/arrow.png';

const Bubble = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const bubble_open = () => {
        if(isOpen){
            setIsOpen(false);
        }else {
            setIsOpen(true);
        }
    }

    return (
        <div className={(isOpen ? "about-bubble-open" : "about-bubble-closed") + " about-bubble"}>
            <p>{props.content}</p>
            <img src={arrow_icon} alt="Arrow Icon" onClick={bubble_open} className={(isOpen ? "arrow-shrink" : "arrow-expand") + " arrow mt-3"} />
        </div>
    );
}

export default Bubble;