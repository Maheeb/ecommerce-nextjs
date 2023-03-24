import Link from "next/link";

function ShopItem(props) {
    let products = props.items
    // console.log(products)
    return(
        <>
            <div className="row">
                {products.length>0 && products.map((item, index) =>(
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
                                <Link href={`detail/${item.id}`}>{item.name}</Link>
                            </h3>
                            <span>$ {item.price}</span>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}
export default ShopItem