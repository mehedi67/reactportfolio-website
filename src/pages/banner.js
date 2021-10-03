function Banner(){
    return(
        
    <section id="home" className="home vh-100">
         <div id="preloader">
        <div className="text-center w-100">
            <div className="loader"></div>
        </div>
    </div>
    <div className="video-overlay"></div>
    <div id="kayden_video" className="home-background position-absolute top-0 start-0 w-100 h-100" data-property="{videoURL:'https://www.youtube.com/watch?v=2Gg6Seob5Mg',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:1, quality:'default'}"></div>
    
    <div className="container h-100 position-relative">
        <div className="home-details text-center w-100 h-100 d-flex align-items-center">
            <div className="home-details-inner w-100">
                <p className="welcome_text fs-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500"><span className="typed_text" data-options="Web Developer, WordPress Expert, Shopify Expert"></span></p>
                <h1 className="fs-1 fw-bold  kayden-underline-center kayden-underline-big d-inline-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">I'm Mehedi</h1>
            </div>
        </div>
    </div>
   
    <div className="scroll-down">
        <a href="demo7.html#about" className="kayden_scrollspy scroll-down-link text-center">
            <div className="scroll-title">Scroll Down</div>
            <div className="scroll-mouse">
                <div className="whell"></div>
            </div>
        </a>
    </div>

</section>

    );
}
export default Banner;
