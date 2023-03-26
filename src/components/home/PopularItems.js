import {useSelector} from "react-redux";
import Link from "next/link";

function PopularItems() {

    let popularItems =useSelector(state => (state.create.products).filter(item => item.tag==='popular'));

    return(
        <div className="popular-items section-padding30">
            <div className="container">
                {/* Section tittle */}
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-10">
                        <div className="section-tittle mb-70 text-center">
                            <h2>Popular Items</h2>
                            <p>
                                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                gravida.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {popularItems && popularItems.map((item,index) =>(
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={index}>
                        <div className="single-popular-items mb-50 text-center">
                            <div className="popular-img">
                                <img src={`/img/gallery/${item.image}`} alt="" />
                                {/*<div className="img-cap">*/}
                                {/*    <span>Add to cart</span>*/}
                                {/*</div>*/}
                                {/*<div className="favorit-items">*/}
                                {/*    <span className="flaticon-heart" />*/}
                                {/*</div>*/}
                            </div>
                            <div className="popular-caption">
                                <h3>
                                    {/*<a href="product_details.html">Thermo Ball Etip Gloves</a>*/}
                                    <Link href={`detail/${item.id}`}>Thermo Ball Etip Gloves</Link>
                                </h3>
                                <span>$ {item.price}</span>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                {/* Button */}
                <div className="row justify-content-center">
                    <div className="room-btn pt-70">
                        {/*<a href="catagori.html" className="btn view-btn1">*/}
                        {/*    View More Products*/}
                        {/*</a>*/}
                        <Link href="/shop" className="btn view-btn1">
                            View More Products
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default PopularItems;