import img1 from './image/logo.png';

const Mypage = () =>{
    return(
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
            <section className="bg-dark p-3 myborder mt-4">
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
export default Mypage;