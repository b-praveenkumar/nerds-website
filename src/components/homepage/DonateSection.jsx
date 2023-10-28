import Button from 'react-bootstrap/Button';
import LeftImg from "../../assets/home/image-left.jpg";
import TopImg from "../../assets/home/image-top.png";

const DonateSection = () => {
    return (
        <>
            {/* Mobile view: Top image, bottom text | Desktop view: Left image, right image + text */}
            <section id="donate-section" className="d-flex align-items-center">
                {/* Mobile view: Hide image | Desktop view: Show image in the left */}
                <div className="left-image d-none d-md-block p-md-5">
                    <img src={LeftImg} alt="Two students working on a robotics project" />
                </div>
                <div className="text">
                    <div className="top-image">
                        <img src={TopImg} alt="A student working on computer electronics" />
                    </div>
                    <h1 className="m-3">Programs and projects that provide hands-on experience</h1>
                    {/* Mobile view: Top text, bottom button (center-aligned) | Desktop view: Left text, right button (left-aligned) */}
                    <div className="d-flex flex-column align-items-center flex-md-row align-items-md-start">
                        <p className="m-3">You can donate to help us continue to inspire the inner NERD of the youth in our community.</p>
                        <Button className="btn">
                            Donate
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DonateSection;