function Header() {
    return(
        <>

            {/*<div id="preloader-active">*/}
            {/*    <div className="preloader d-flex align-items-center justify-content-center">*/}
            {/*        <div className="preloader-inner position-relative">*/}
            {/*            <div className="preloader-circle" />*/}
            {/*            <div className="preloader-img pere-text">*/}
            {/*                <img src="/img/logo/logo.png" alt="" />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <header>
                <div className="header-area">
                    <div className="main-header header-sticky">
                        <div className="container-fluid">
                            <div className="menu-wrapper">
                                <div className="logo">
                                    <a href="/">
                                        <img src="/img/logo/logo.png" alt="" />
                                    </a>
                                </div>
                                <div className="main-menu d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li>
                                                <a href="/">Home</a>
                                            </li>
                                            <li>
                                                <a href="/shop">shop</a>
                                            </li>
                                            <li>
                                                <a href="/about">about</a>
                                            </li>


                                            <li>
                                                <a href="/contact">Contact</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="header-right">
                                    <ul>
                                        <li>
                                            <div className="nav-search search-switch">
                                                <span className="flaticon-search" />
                                            </div>
                                        </li>
                                        <li>

                                            <a href="login.html">
                                                <span className="flaticon-user" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="cart.html">
                                                <span className="flaticon-shopping-cart" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}
export default Header;