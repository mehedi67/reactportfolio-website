function Testimonial(){
    return(
        <section id="testimonials">
        <div className="container">
            
            <div className="heading text-center mb-5">
                <h2 className="fs-3 kayden-underline-left mb-5 fw-bold text-uppercase d-inline-block">Testimonials</h2>
            </div>
           
            <div className="section-body">
                <div className="testimonials-header mb-5">
                    <div className="row">
                        <div className="col-10 offset-1">
                            <div className="text-primary fs-1">
                                <i className="fas fa-quote-right"></i>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    
                    <div id="client_slider" className="owl-carousel owl-theme">
                       
                        <div className="offset-1 col-10">
                            <div className="row">
                                <div className="col-md-6 order-2 order-md-1">
                                    <div className="testimonial_details">
                                        <p className="text-secondary mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <span className="font-family-secondary fs-5 fw-light fst-italic">--Emma Watson</span>
                                    </div>
                                </div>
                                <div className="col-md-6 order-1 order-md-2">
                                    <div className="testimonial_thumbnail d-flex justify-content-start justify-content-md-end">
                                        <img src="./assets/images/testimonial1.jpg" className="kayden-shadow rounded-3 w-auto" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="offset-1 col-10">
                            <div className="row">
                                <div className="col-md-6 order-2 order-md-1">
                                    <div className="testimonial_details">
                                        <p className="text-secondary mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <span className="font-family-secondary fs-5 fw-light fst-italic">--Linzi Landry</span>
                                    </div>
                                </div>
                                <div className="col-md-6 order-1 order-md-2">
                                    <div className="testimonial_thumbnail d-flex justify-content-start justify-content-md-end">
                                        <img src="./assets/images/testimonial2.jpg" className="kayden-shadow rounded-3 w-auto" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="offset-1 col-10">
                            <div className="row">
                                <div className="col-md-6 order-2 order-md-1">
                                    <div className="testimonial_details">
                                        <p className="text-secondary mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <span className="font-family-secondary fs-5 fw-light fst-italic">--Maksim Mckenna</span>
                                    </div>
                                </div>
                                <div className="col-md-6 order-1 order-md-2">
                                    <div className="testimonial_thumbnail d-flex justify-content-start justify-content-md-end">
                                        <img src="./assets/images/testimonial3.jpg" className="kayden-shadow rounded-3 w-auto" alt=""/>
                                    </div>
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
export default Testimonial;