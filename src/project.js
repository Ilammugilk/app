const Myproject = () =>{
    return(
        <section>
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
                            <img src='./image/project2.png' className='img-fluid mb-3' />
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
export default Myproject;