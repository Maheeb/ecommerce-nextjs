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
                                    <a href="index.html">
                                        <img src="/img/logo/logo.png" alt="" />
                                    </a>
                                </div>
                                <div className="main-menu d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li>
                                                <a href="index.html">Home</a>
                                            </li>
                                            <li>
                                                <a href="shop.html">shop</a>
                                            </li>
                                            <li>
                                                <a href="about.html">about</a>
                                            </li>
                                            <li className="hot">
                                                <a href="#">Latest</a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a href="shop.html"> Product list</a>
                                                    </li>
                                                    <li>
                                                        <a href="product_details.html"> Product Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="blog.html">Blog</a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a href="blog.html">Blog</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details.html">Blog Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Pages</a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a href="login.html">Login</a>
                                                    </li>
                                                    <li>
                                                        <a href="cart.html">Cart</a>
                                                    </li>
                                                    <li>
                                                        <a href="elements.html">Element</a>
                                                    </li>
                                                    <li>
                                                        <a href="confirmation.html">Confirmation</a>
                                                    </li>
                                                    <li>
                                                        <a href="checkout.html">Product Checkout</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact</a>
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