import ShopContent from "@/components/shop/ShopContent";
import ShopMethod from "@/components/home/ShopMethod";

function Shop() {
    return(
        <>
        <div className="slider-area ">
            <div className="single-slider slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap text-center">
                                <h2>Watch Shop</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         <ShopContent/>
            <ShopMethod/>
            </>

    )
}
export default Shop;