function Footer() {
    return(
        <footer className="kayden-footer py-4">
        <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center py-3">
               
                <ul className="social-links list-inline mb-4">
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
             
                <p className="text-center m-0">2021 ©. kayden Template. Developed and Designed by Mehedi</p>
               
            </div>
        </div>
        <a href="demo7.html#" className="toTop d-inline" id="return-to-top">
        <i className="fas fa-chevron-up"></i>
    </a>
    </footer>
  

    );
}
export default Footer;