function Footer() {
    return(
        <>
            <footer>
                {/* Footer Start*/}
                <div className="footer-area footer-padding">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="single-footer-caption mb-30">
                                        {/* logo */}
                                        <div className="footer-logo">
                                            <a href="index.html">
                                                <img src="/img/logo/logo2_footer.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="footer-tittle">
                                            <div className="footer-pera">
                                                <p>
                                                    Asorem ipsum adipolor sdit amet, consectetur adipisicing
                                                    elitcf sed do eiusmod tem.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-5">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Lorem ipsum dolor sit amet</h4>
                                        <ul>
                                            <li>
                                                <a href="#"> Aenean malesuada</a>

                                            </li>
                                            <li>
                                                <a href="#"> Aenean malesuada</a>
                                            </li>
                                            <li>
                                                <a href="#"> Aenean malesuada</a>

                                            </li>
                                            <li>
                                                <a href="#"> Aenean malesuada</a>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-7">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Donec mauris diam</h4>
                                        <ul>
                                            <li>
                                                <a href="#">malesuada ac bibendum</a>
                                            </li>
                                            <li>
                                                <a href="#">malesuada ac bibendum</a>
                                            </li>
                                            <li>
                                                <a href="#"> malesuada ac bibendum</a>
                                            </li>
                                            <li>
                                                <a href="#"> malesuada ac bibendum</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-7">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Aliquam lobortis  justo</h4>
                                        <ul>
                                            <li>
                                                <a href="#">Aliquam lobortis volutpat justo</a>
                                            </li>
                                            <li>
                                                <a href="#">Aliquam lobortis volutpat justo</a>
                                            </li>
                                            <li>
                                                <a href="#">Aliquam lobortis volutpat justo</a>
                                            </li>
                                            <li>
                                                <a href="#">Aliquam lobortis volutpat justo</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Footer bottom */}

                    </div>
                </div>
                {/* Footer End*/}
            </footer>

            <div className="search-model-box">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-btn">+</div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Searching key....." />
                    </form>
                </div>
            </div>

        </>

    )
}
export default Footer;