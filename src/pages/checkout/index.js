import CheckoutContent from "@/components/checkout/CheckoutContent";

function Checkout() {
    return(
        <>
            <div className="slider-area ">
                <div className="single-slider slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center">
                                    <h2>Checkout</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <CheckoutContent/>

        </>
    )
}
export default Checkout;