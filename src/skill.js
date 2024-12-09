import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Myskill = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <section>
            <div className='row'>
                <div className='col-lg-12 p-4'>
                    <h2 className='text-dark text-center'>Technical Kills</h2>
                </div>
            </div>
            <div className='container rounded bg-dark'>
                <div className="slider-container p-5">
                    <Slider {...settings}>
                        <div className="card p-3">
                            <div className="card-body">
                                <h5 className="card-title text-center">HTML</h5>
                                <img src='./image/html-5.png' className='img-fluid' />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center">CSS</h5>
                                <img src='./image/css-3.png' className='img-fluid' />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center">JS</h5>
                                <img src='./image/js.png' className='img-fluid' />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center">React JS</h5>
                                <img src='./image/physics.png' className='img-fluid' />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center">Bootstrap</h5>
                                <img src='./image/bootstrap.png' className='img-fluid' />
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center">Responsive Website</h5>
                                <img src='./image/responsive-design.png' className='img-fluid' />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center">Git Hub</h5>
                                <img src='./image/git.png' className='img-fluid' />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <section className="bg-dark p-3 myborder mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6"><div className="text-secondary">Copyrigh@uimaster 2023 to 2025</div>
                        </div>
                        <div className="col-xl-2"> <div className="text-secondary">Terms of Use</div></div>
                        <div className="col-xl-2"> <div className="text-secondary">Privacy & Policy</div></div>
                        <div className="col-xl-2"> <div className="text-secondary">Contact Us</div></div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Myskill;

