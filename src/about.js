const Myabout = () =>{
    return(
        <section>
            <div className='container-fuild bg-light'>
                <div className='row'>
                    <div className='col-lg-6 p-5 mt-4'>
                        <img src='./image/about-us.png' alt='' height={500} />
                    </div>
                    <div className='col-lg-6 mt-4 p-5'>
                    <h1>LET’S<br />
                            InNTRODUCE ABOUT<br />
                            MYSELF</h1>
                            <hr/>
                        <p className='text-secondary'>
                            Im Ilammugil from Tamilnadu.I Recently garduate in BSc Computer science,I completed Front-end course through bengalore.<br/> <br/>

                            Aspiring Front-end Developer with a strong foundation in HTML,CSS, and JavaScript, 
                            complemented by hands-on Project experience. Passionate about creating responsive 
                            and user-friendly web applications. Seeking an opportunity to leverage skills in a
                             challenging environment to deliver exceptional user experience.
                        </p>
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
export default Myabout;