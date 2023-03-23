function ShopContent() {
    return(
        <section className="popular-items latest-padding">
            <div className="container">
                <div className="row product-btn justify-content-between mb-40">
                    <div className="properties__button">
                        {/*Nav Button  */}
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a
                                    className="nav-item nav-link active"
                                    id="nav-home-tab"
                                    data-toggle="tab"
                                    href="#nav-home"
                                    role="tab"
                                    aria-controls="nav-home"
                                    aria-selected="true"
                                >
                                    NewestArrivals
                                </a>
                                <a
                                    className="nav-item nav-link"
                                    id="nav-profile-tab"
                                    data-toggle="tab"
                                    href="#nav-profile"
                                    role="tab"
                                    aria-controls="nav-profile"
                                    aria-selected="false"
                                >

                                    Price high to low
                                </a>
                                <a
                                    className="nav-item nav-link"
                                    id="nav-contact-tab"
                                    data-toggle="tab"
                                    href="#nav-contact"
                                    role="tab"
                                    aria-controls="nav-contact"
                                    aria-selected="false"
                                >

                                    Most popular
                                </a>
                            </div>
                        </nav>
                        {/*End Nav Button  */}
                    </div>
                    {/* Grid and List view */}
                    <div className="grid-list-view"></div>
                    {/* Select items */}
                    <div className="select-this">
                        <form action="#">
                            <div className="select-itms">
                                <select name="select" id="select1">
                                    <option value="">40 per page</option>
                                    <option value="">50 per page</option>
                                    <option value="">60 per page</option>
                                    <option value="">70 per page</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Nav Card */}
                <div className="tab-content" id="nav-tabContent">
                    {/* card one */}
                    <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                    >
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="/img/gallery/popular1.png" alt="" />
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        <div className="favorit-items">
                                            <span className="flaticon-heart" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3>
                                            <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                        </h3>
                                        <span>$ 45,743</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="/img/gallery/popular2.png" alt="" />
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        <div className="favorit-items">
                                            <span className="flaticon-heart" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3>
                                            <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                        </h3>
                                        <span>$ 45,743</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="/img/gallery/popular3.png" alt="" />
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        <div className="favorit-items">
                                            <span className="flaticon-heart" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3>
                                            <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                        </h3>
                                        <span>$ 45,743</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="/img/gallery/popular4.png" alt="" />
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        <div className="favorit-items">
                                            <span className="flaticon-heart" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3>
                                            <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                        </h3>
                                        <span>$ 45,743</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="/img/gallery/popular5.png" alt="" />
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        <div className="favorit-items">
                                            <span className="flaticon-heart" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3>
                                            <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                        </h3>
                                        <span>$ 45,743</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="/img/gallery/popular6.png" alt="" />
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        <div className="favorit-items">
                                            <span className="flaticon-heart" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3>
                                            <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                        </h3>
                                        <span>$ 45,743</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card two */}
                    <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                    >
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="/img/gallery/popular1.png" alt="" />
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        <div className="favorit-items">
                                            <span className="flaticon-heart" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3>
                                            <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                        </h3>
                                        <span>$ 45,743</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="/img/gallery/popular2.png" alt="" />
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        <div className="favorit-items">
                                            <span className="flaticon-heart" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3>
                                            <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                        </h3>
                                        <span>$ 45,743</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="/img/gallery/popular3.png" alt="" />
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        <div className="favorit-items">
                                            <span className="flaticon-heart" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3>
                                            <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                        </h3>
                                        <span>$ 45,743</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="/img/gallery/popular4.png" alt="" />
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        <div className="favorit-items">
                                            <span className="flaticon-heart" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3>
                                            <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                        </h3>
                                        <span>$ 45,743</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="/img/gallery/popular5.png" alt="" />
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        <div className="favorit-items">
                                            <span className="flaticon-heart" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3>
                                            <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                        </h3>
                                        <span>$ 45,743</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="/img/gallery/popular6.png" alt="" />
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        <div className="favorit-items">
                                            <span className="flaticon-heart" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3>
                                            <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                        </h3>
                                        <span>$ 45,743</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card three */}
                    <div
                        className="tab-pane fade"
                        id="nav-contact"
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                    >
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="/img/gallery/popular1.png" alt="" />
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        <div className="favorit-items">
                                            <span className="flaticon-heart" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3>
                                            <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                        </h3>
                                        <span>$ 45,743</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="/img/gallery/popular2.png" alt="" />
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        <div className="favorit-items">
                                            <span className="flaticon-heart" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3>
                                            <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                        </h3>
                                        <span>$ 45,743</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="/img/gallery/popular3.png" alt="" />
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        <div className="favorit-items">
                                            <span className="flaticon-heart" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3>
                                            <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                        </h3>
                                        <span>$ 45,743</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="/img/gallery/popular4.png" alt="" />
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        <div className="favorit-items">
                                            <span className="flaticon-heart" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3>
                                            <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                        </h3>
                                        <span>$ 45,743</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="/img/gallery/popular5.png" alt="" />
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        <div className="favorit-items">
                                            <span className="flaticon-heart" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3>
                                            <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                        </h3>
                                        <span>$ 45,743</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-popular-items mb-50 text-center">
                                    <div className="popular-img">
                                        <img src="/img/gallery/popular6.png" alt="" />
                                        <div className="img-cap">
                                            <span>Add to cart</span>
                                        </div>
                                        <div className="favorit-items">
                                            <span className="flaticon-heart" />
                                        </div>
                                    </div>
                                    <div className="popular-caption">
                                        <h3>
                                            <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                        </h3>
                                        <span>$ 45,743</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Nav Card */}
            </div>
        </section>

    )
}
export default ShopContent