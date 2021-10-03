function Contact() {
    return(
        <section id="contact">
        <div className="container">
            
            <div className="heading text-center mb-5">
                <h2 className="fs-3 kayden-underline-left mb-5 fw-bold text-uppercase d-inline-block">Contact Us</h2>
            </div>
            
            <div className="section-body">
                <div className="row gy-5">
                    <div className="col-md-6">
                        <div className="d-flex flex-column justify-content-center h-100">
                          
                            <div className="contact-details d-flex flex-row align-items-center mb-3">
                                <div className="cd-icon fs-2 me-4">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="cd-info fs-5 font-family-secondary">
                                    <a href="demo7.html#" className="text-white">
                                        <span className="__cf_email__" data-cfemail="1c777d657879725c79647d716c7079327f7371">[email&#160;protected]</span>
                                    </a>
                                </div>
                            </div>
                           
                            <div className="contact-details d-flex flex-row align-items-center mb-3">
                                <div className="cd-icon fs-2 me-4">
                                    <i className="fas fa-map-marked-alt"></i>
                                </div>
                                <div className="cd-info fs-5 font-family-secondary">
                                    New York, USA
                                </div>
                            </div>
                        
                            <div className="contact-details d-flex flex-row align-items-center">
                                <div className="cd-icon fs-2 me-4">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="cd-info fs-5 font-family-secondary">
                                    <a href="demo7.html#" className="text-white">
                                        +7 123 456 789
                                    </a>
                                </div>
                            </div>
                            {/* Contact Details END */}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3 className="mb-5 fs-4 text-center text-sm-left">Or Let's start to conversation</h3>
                        <form action="https://demo.themesuccess.com/templates/kayden/php/form.php" method="post" id="contact-form">
                            <div className="mb-4">
                                <input type="text" name="name" id="name" placeholder="Full name" className="form-control" />
                            </div>
                            <div className="mb-4">
                                <input type="email" name="email" id="email" placeholder="Email" className="form-control" />
                            </div>
                            <div className="mb-4">
                                <input type="text" name="subject" id="subject" placeholder="Subject" className="form-control" />
                            </div>
                            <div className="mb-4">
                                <textarea placeholder="Message" name="text" id="text" className="form-control" cols="30" rows="10"></textarea>
                            </div>
                            <div className="mb-4">
                                <button type="submit" id="contact-btn" className="btn btn-primary">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         
        </div>
    </section>
   
    );
}
export default Contact;