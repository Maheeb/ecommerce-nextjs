import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateSingleProduct} from "@/components/store/globalArray";

function ShortDetail(props) {
    // console.log(props.productDetail)
    const [product,setProduct] = useState([]);
    const cartProducts = useSelector(state => state.create.productTaken);
    const dispatch = useDispatch();

    console.log(cartProducts)
    const [defaultValue, setDefaultValue] = useState('');
    useEffect(()=>{
        setDefaultValue(product.count == undefined ? 1 : product.count);
    },[product.count])

    const handleSingleItemClick = (e, v) => {
        e.preventDefault();
        let isProductInCart = cartProducts.find(function (item) {
            return item.id == v
        })
        let test ={};
        if (v!="") {

            dispatch(updateSingleProduct({product_id:v,addedQuantity:defaultValue}))
        }

    };

    return(
        <>
            <div className="product_image_area">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-12">
                            <div className="product_img_slide d-flex justify-content-center">
                                <div className="single_product_img">
                                    <img
                                        src={`/img/gallery/${props.productDetail[0].image}`}
                                        alt="#"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="single_product_text text-center">
                                <h3>
                                    {props.productDetail[0].name}
                                </h3>
                                <p>
                                    Seamlessly empower fully researched growth strategies and
                                    interoperable internal or “organic” sources. Credibly innovate
                                    granular internal or “organic” sources whereas high standards in
                                    web-readiness. Credibly innovate granular internal or organic
                                    sources whereas high standards in web-readiness. Energistically
                                    scale future-proof core competencies vis-a-vis impactful
                                    experiences. Dramatically synthesize integrated schemas. with
                                    optimal networks.
                                </p>
                                <div className="card_area">
                                    <div className="product_count_area">
                                        <p>Quantity</p>
                                        <div className="product_count d-inline-block">
                                <span className="product_count_item" onClick={() => {
                                    setDefaultValue(Math.max(defaultValue - 1, 0));
                                }}>
                                        <i className="ti-minus" />
                                     </span>
                                            <input
                                                className="product_count_item input-number"
                                                type="text"
                                                value={defaultValue}
                                                onChange={e => setDefaultValue(Number(e.target.value))}
                                            />
                                            <span className="product_count_item"
                                                  onClick={() => {
                                                      setDefaultValue(defaultValue + 1);
                                                  }}

                                            >
                                                <i className="ti-plus" />
                </span>
                                        </div>
                                        <p>${props.productDetail[0].price}</p>
                                    </div>
                                    <div className="add_to_cart">
                                        <a href="#" className="btn_3" onClick={(event) => handleSingleItemClick(event, props.productDetail[0].id)}>
                                            add to cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ShortDetail