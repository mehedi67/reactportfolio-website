function Skill() {
    return(
        <section id="facts">
 
        <div className="section-body">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-md-6">
                        <div className="row gx-3 gy-5">
                            <div className="col-6">
                             
                                <div className="fact d-flex flex-column align-items-center align-items-md-start">
                                    <h3 className="fs-2 d-inline-block"><span className="tmcounter" data-from="0" data-to="9" data-speed="1500">0</span><sup>+</sup></h3>
                                    <p className="fs-4 d-inline-block text-center text-md-left">Years Experience</p>
                                </div>
                                
                            </div>
                            <div className="col-6">
                              
                                <div className="fact d-flex flex-column align-items-center align-items-md-start">
                                    <h3 className="fs-2 d-inline-block" ><span className="tmcounter" data-from="0" data-to="100" data-speed="1500">0</span><sup>+</sup></h3>
                                    <p className="fs-4 d-inline-block text-center text-md-left">Happy Clients</p>
                                </div>
                               
                            </div>
                            <div className="col-6">
                               
                                <div className="fact d-flex flex-column align-items-center align-items-md-start">
                                    <h3 className="fs-2 d-inline-block" ><span className="tmcounter" data-from="0" data-to="8963" data-speed="1500">0</span></h3>
                                    <p className="fs-4 d-inline-block text-center text-md-left">Downloads</p>
                                </div>
                               
                            </div>
                            <div className="col-6">
                                
                                <div className="fact d-flex flex-column align-items-center align-items-md-start">
                                    <h3 className="fs-2 d-inline-block"><span className="tmcounter" data-from="0" data-to="2569" data-speed="1500">0</span></h3>
                                    <p className="fs-4 d-inline-block text-center text-md-left">Projects done</p>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="fs-3 mb-5 fw-bold">My Skills</h2>
                        <div className="skills_container">
                            
                            <div className="mb-4">
                                <label className="mb-3 fs-6">Web Design 75%</label>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-loadAnimation" data-percent="75" style={{ width: "0%" }} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                           
                            <div className="mb-4">
                                <label className="mb-3 fs-6">Web Development 90%</label>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-loadAnimation" data-percent="90" style={{ width: "0%" }} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            
                            <div className="mb-4">
                                <label className="mb-3 fs-6">Wordpress development 70%</label>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-loadAnimation" data-percent="70" style={{ width: "0%" }} role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                           
                            <div className="mb-4">
                                <label className="mb-3 fs-6">Front end development 95%</label>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-loadAnimation" data-percent="95" style={{ width: "0%" }} role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  
    );
}
export default Skill;