import Button from 'react-bootstrap/Button';

const Hero = () => {
    return (
        <section id="hero-section">
            <header style={{ paddingLeft: 0 }} id="hero">
                <div className='p-5 text-center bg-image'>
                    <div className='text-container text-white'>
                        <div className='d-flex flex-column justify-content-between align-items-center h-100'>
                            <div className='hero-header'>
                                <h1 className='mb-3'>Nurturing Educational Readiness and Development from the Start</h1>
                            </div>
                            <div className='hero-footer'>
                                <h4 className='mb-5'>Inspire your inner N.E.R.D.S.</h4>
                                <Button className='btn btn-lg'>Explore Student Programs</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    );
}

export default Hero;