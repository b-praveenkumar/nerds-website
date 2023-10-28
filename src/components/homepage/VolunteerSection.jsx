import Button from 'react-bootstrap/Button';
import RightImg from "../../assets/home/image-right.png";

const VolunteerSection = () => {
    return (
        <>
            {/* Mobile view: Top image, bottom text | Desktop view: Right image, left text */}
            <section id="volunteer-section" className="d-flex flex-column align-items-center flex-md-row-reverse">
                <div className="right-image">
                    <img src={RightImg} alt="Group pic of students and volunteers" />
                </div>
                <div className="d-flex flex-column align-items-center align-items-md-start text">
                    <h1 className="m-3">The best time to volunteer is today</h1>
                    <p className="m-3">N.E.R.D.S. offers a wide variety of volunteer opportunities ranging in commitment level from one time events to semester long opportunities</p>
                    <Button className="btn">
                        See what works for you
                    </Button>
                </div>
            </section>
        </>
    );
}

export default VolunteerSection;