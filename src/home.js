import img1 from './image/logo.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Myhome = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return (
        <section>
            <div className="container bg-secondary rounded shadow-lg" id="active">
                <div className="row mt-5">
                    <div className="col-lg-6 text-white p-5 mt-4" id='home'>
                        <h4>Hello</h4>
                        <h1>I'm Ilammugil</h1>
                        <h3>Front-End Developer</h3>
                        <p className='mt-3'>
                            <button className='btn btn-dark pt-2' id="button">
                            <a href="https://www.linkedin.com/in/ilammugil">Contact Me</a></button>
                        </p>
                    </div>
                    <div className="col-lg-6 mt-4 p-5">
                        <img src={img1} alt="logo" height={290} width={300} />
                    </div>
                </div>
            </div>

            <div className='container-fuild bg-light'>
                <div className='row mt-5'>
                    <div className='col-lg-6 p-5 mt-4'>
                        <img src='./image/about-us.png' alt='' height={500} />
                    </div>
                    <div className='col-lg-6 mt-4 p-5'>
                        <h1>LET’S<br />
                            InNTRODUCE ABOUT<br />
                            MYSELF</h1>
                        <hr />
                        <p className='text-secondary'>
                            Im Ilammugil from Tamilnadu.I Recently garduate in BSc Computer science,I completed Front-end course through bengalore.<br /> <br />

                            Aspiring Front-end Developer with a strong foundation in HTML,CSS, and JavaScript,
                            complemented by hands-on Project experience. Passionate about creating responsive
                            and user-friendly web applications. Seeking an opportunity to leverage skills in a
                            challenging environment to deliver exceptional user experience.
                        </p>
                    </div>
                </div>
            </div>
                <div className='row'>
            <div className='col-lg-12 p-4'>
                <h2 className='text-dark text-center'>Technical Kills</h2>
            </div>
        </div>
        <div className='container rounded bg-dark'>
            <div className="slider-container p-5">
              <Slider {...settings}>
              <div className="card">
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
                <div>
                <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">JS</h5>
                            <img src='./image/js.png' className='img-fluid' />
                        </div>
                    </div>
                </div>
                <div>
                <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">React JS</h5>
                            <img src='./image/physics.png' className='img-fluid' />
                        </div>
                    </div>
                </div>
                <div>
                <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Bootstrap</h5>
                            <img src='./image/bootstrap.png' className='img-fluid' />
                        </div>
                    </div>
                </div>
                <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Responsive Website</h5>
                            <img src='./image/responsive-design.png' className='img-fluid' />
                        </div>
                    </div>
              </Slider>
            </div>
            </div>
        <div className='container-fuild bg-teritary ms-5 me-5'>
        <div className='row'>
            <div className='col-lg-12 p-4'>
                <h2 className='text-dark text-center'>Projects</h2>
            </div>
        </div>
            <div className='row mb-4'>
                <div className='col-lg-6'>
                    <div className="card">
                        <div className="card-body" id="buttons">
                            <h5 className="card-title text-center">Redux Project</h5>
                            <img src='./image/project.png' className='img-fluid mb-3'/>
                            <p className="text-center">
                            <button className="btn btn-dark" id="button">
                            <a href="https://myredux2-ilammugils-projects.vercel.app/">LIVE</a>
                            </button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Api Project</h5>
                            <img src='./image/project2.png' className='img-fluid mb-3 position:' />
                            <p className="text-center">
                            <button className="btn btn-dark" id="button">
                            <a href="https://campusinterview.in/redux/project4/">LIVE</a>
                            </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className="card">
                        <div className="card-body" id="buttons">
                            <h5 className="card-title text-center">Weather Info</h5>
                            <img src='./image/project3.png' className='img-fluid mb-3'/><br/>
                            <p className="text-center mb-2">
                            <button className="btn btn-dark" id="button">
                            <a href="https://weather-app-60034034990.development.catalystserverless.in/app/index.html">LIVE</a>
                            </button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Gym Home Page</h5>
                            <img src='./image/project4.png' className='img-fluid mb-3' />
                            <p className="text-center">
                            <button className="btn btn-dark" id="button">
                            <a href="https://gym-60034034990.development.catalystserverless.in/app/index.html">LIVE</a>
                            </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        <div className='row mb-5'>
            <div className='col-lg-12'>
            </div>
        </div>
    </div>
    <section className="bg-dark p-3 myborder">
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
export default Myhome;