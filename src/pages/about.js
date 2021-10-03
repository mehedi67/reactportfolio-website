function About() {
    return(
        <section id="about" className="min-vh-100">
        <div className="container h-100">
            <div className="about_inside w-100 h-100 d-flex justify-content-center align-items-center">
                <div className="row w-100">
                  
                    <div className="offset-md-1 col-md-4">
                        <div className="about-image w-100">
                            <img src="./assets/images/about.jpg" className="kayden-shadow rounded-3 w-100" alt="kayden Picture" data-aos="zoom-in" data-aos-duration="800"/>
                        </div>
                    </div>
                  
                    <div className="offset-md-1 col-md-6 mt-5 mt-md-0">
                        <div className="h-100 d-flex align-items-center justify-content-center">
                            <div className="about-details">
                                <h2 className="fs-3 fw-bold mb-5">I'm Mehedi Hasan</h2>
                                <p className="text-secondary mb-5">Hi! Thanks for visiting my website. I am full stack web developer who created a lot of website. I have 3 years experiens. I completed 100+ projects.Client satisfication is the main goal. so feel free you can contact with me. Thanks!</p>
                                
                                <ul className="social-links list-inline mb-5">
                                    <li className="list-inline-item">
                                        <a href="demo7.html#" title="facebook">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="demo7.html#" title="linkedin">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="demo7.html#" title="pinterest">
                                            <i className="fab fa-pinterest-p"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="demo7.html#" title="git">
                                            <i className="fab fa-git"></i>
                                        </a>
                                    </li>
                                </ul>
                               
                                <a href="demo7.html#" className="btn btn-outline-primary" title="Download CV">Download CV</a>
                            </div>
                        </div>
                    </div>
                   
                </div>  
            </div>
        </div>
    </section>
  
    );
}
export default About;