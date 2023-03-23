function Contact() {
    return (
        <>
            <div className="slider-area ">
                <div className="single-slider slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center">
                                    <h2>Contacts</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="contact-section">
                <div className="container">

                    <div className="d-none d-sm-block mb-5 pb-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd"
                            height="500" width="1160" style={{border: 0}} allowFullScreen="" aria-hidden="false"
                            tabIndex="0"></iframe>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h2 className="contact-title">Get in Touch</h2>
                        </div>
                        <div className="col-lg-8">
                            <form
                                className="form-contact contact_form"
                                action="contact_process.php"
                                method="post"
                                id="contactForm"
                                noValidate="novalidate"
                            >
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
            <textarea
                className="form-control w-100"
                name="message"
                id="message"
                cols={30}
                rows={9}
                onFocus="this.placeholder = ''"
                onBlur="this.placeholder = 'Enter Message'"
                placeholder=" Enter Message"
                defaultValue={""}
            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input
                                                className="form-control valid"
                                                name="name"
                                                id="name"
                                                type="text"
                                                onFocus="this.placeholder = ''"
                                                onBlur="this.placeholder = 'Enter your name'"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input
                                                className="form-control valid"
                                                name="email"
                                                id="email"
                                                type="email"
                                                onFocus="this.placeholder = ''"
                                                onBlur="this.placeholder = 'Enter email address'"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                name="subject"
                                                id="subject"
                                                type="text"
                                                onFocus="this.placeholder = ''"
                                                onBlur="this.placeholder = 'Enter Subject'"
                                                placeholder="Enter Subject"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <button type="submit" className="button button-contactForm boxed-btn">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-3 offset-lg-1">
                            <div className="media contact-info">
      <span className="contact-info__icon">
        <i className="ti-home"/>
      </span>
                                <div className="media-body">
                                    <h3>Buttonwood, California.</h3>
                                    <p>Rosemead, CA 91770</p>
                                </div>
                            </div>
                            <div className="media contact-info">
      <span className="contact-info__icon">
        <i className="ti-tablet"/>
      </span>
                                <div className="media-body">
                                    <h3>+1 253 565 2365</h3>
                                    <p>Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div className="media contact-info">
      <span className="contact-info__icon">
        <i className="ti-email"/>
      </span>
                                <div className="media-body">
                                    <h3>support@colorlib.com</h3>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

        </>
    )
}

export default Contact