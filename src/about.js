const Myabout = () =>{
    return(
        <section>
            <div className='container-fuild bg-light'>
                <div className='row'>
                    <div className='col-lg-6 p-5 mt-4'>
                        <img src='./image/about-us.png' alt='' height={500} />
                    </div>
                    <div className='col-lg-6 mt-4 p-5'>
                        <h1>let’s<br />
                            Introduce about<br />
                            myself</h1>
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
        </section>
    );
}
export default Myabout;