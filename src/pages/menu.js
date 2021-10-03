import React from "react";
import { Anchor } from 'antd';

const { Link } = Anchor;
function Menu() {
    return(

<div>
                <header className="kayden-header sticky-top">
        <div className="header-inside transparent_header" style={{position: "fixed"}}>
            <div className="d-flex flex-row justify-content-between align-items-center">
             
                <div className="kayden-menu-toggler">
                    <a className="kayden-toggler text-reset" data-bs-toggle="offcanvas" href="demo7.html#kaydenOffCanvas" role="button" aria-controls="kaydenOffCanvas">
                        <div className="kt-r">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="kt-t">
                            MENU
                        </div>
                    </a>
                </div>
               
                <div className="kayden-logo">
                    <a href="demo7.html#">
                        <img src="./assets/images/logo.svg" height="30" alt="kayden"/>
                    </a>
                </div>
              
                <div className="kayden-nav-meta fs-5 fw-bold d-none d-sm-block text-end">
                    <a href="demo7.html#" className="text-reset">+7 123 456 789</a>
                </div>
              
            </div>
        </div>
    </header>
  
    <div className="offcanvas offcanvas-start" id="kaydenOffCanvas">
        
        <div className="offcanvas-header">
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                <i className="fas fa-times"></i>
            </button>
        </div>
      
        <div className="offcanvas-body">
            <div className="kayden-offcanvas-nav-container d-flex flex-column justify-content-center align-items-center">
                   
                    <ul className="kayden-offcanvas-nav list-inline ">
                        <Anchor className="text-white">
                        <Link className="kayden_scrollspy  underline_animation underline_text text-reset fs-4 fw-bold" href="#home" title="Home" data-bs-dismiss="offcanvas" />
                        <Link className="kayden_scrollspy underline_animation underline_text text-reset fs-4 fw-bold" href="#about" title="About" data-bs-dismiss="offcanvas" />
                        <Link className="kayden_scrollspy underline_animation underline_text text-reset fs-4 fw-bold" href="#services" title="Service" data-bs-dismiss="offcanvas" />
                        <Link className="kayden_scrollspy underline_animation underline_text text-reset fs-4 fw-bold" href="#facts" title="Skills" data-bs-dismiss="offcanvas" />
                        <Link className="kayden_scrollspy underline_animation underline_text text-reset fs-4 fw-bold" href="#education" title="Education" data-bs-dismiss="offcanvas" />
                        <Link className="kayden_scrollspy underline_animation underline_text text-reset fs-4 fw-bold" href="#testimonials" title="Testimonials" data-bs-dismiss="offcanvas" />
                        <Link className="kayden_scrollspy underline_animation underline_text text-reset fs-4 fw-bold" href="#faq" title="FAQ" data-bs-dismiss="offcanvas" />
                        <Link className="kayden_scrollspy underline_animation underline_text text-reset fs-4 fw-bold" href="#contact" title="Contact" data-bs-dismiss="offcanvas" />
    
                    </Anchor>
                    </ul>
                    
                  
            </div>
        </div>
      
    </div>
  
        </div>

    )
}
export default Menu;