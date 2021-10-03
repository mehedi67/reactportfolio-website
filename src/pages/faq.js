function Faq() {
    return(
        <section id="faq">
        <div className="container">
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    
                    <div className="heading text-center mb-5">
                        <h2 className="fs-3 kayden-underline-left mb-5 fw-bold text-uppercase d-inline-block">FAQ</h2>
                    </div>
                    
                    <div className="accordion" id="faq_accordion">
                        
                        <div className="accordion-item">

                            <h2 className="accordion-header" id="headingOne">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion1" aria-expanded="true" aria-controls="accordion1">
                                What is Bootstrap 5
                              </button>
                            </h2>

                            <div id="accordion1" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faq_accordion">

                              <div className="accordion-body text-secondary">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                              </div>

                            </div>

                        </div>
                      
                        <div className="accordion-item">

                            <h2 className="accordion-header" id="headingTwo">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion2" aria-expanded="true" aria-controls="accordion2">
                                How working kayden Template?
                              </button>
                            </h2>

                            <div id="accordion2" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faq_accordion">

                              <div className="accordion-body">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                              </div>

                            </div>

                        </div>
                     
                        <div className="accordion-item">

                            <h2 className="accordion-header" id="heading3">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion3" aria-expanded="true" aria-controls="accordion3">
                                Why using Bootstrap 5?
                              </button>
                            </h2>

                            <div id="accordion3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faq_accordion">

                              <div className="accordion-body">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                              </div>

                            </div>

                        </div>
                        
                        <div className="accordion-item">

                            <h2 className="accordion-header" id="heading4">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion4" aria-expanded="true" aria-controls="accordion4">
                                How to control grids in this template?
                              </button>
                            </h2>

                            <div id="accordion4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faq_accordion">

                              <div className="accordion-body">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
export default Faq;