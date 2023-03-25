import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {updateSingleProduct} from "@/components/store/globalArray";
import Link from "next/link";

function Cart() {
    const cartProducts = useSelector(state => state.create.productTaken);
    console.log(cartProducts);
    const [products,setProduct] = useState([]);
    const dispatch = useDispatch();
    const [localValues, setLocalValues] = useState(cartProducts);
    useEffect(()=>{

        setLocalValues(cartProducts);

    },[cartProducts])
    const handleChange = (e, index,product_id) => {
        const newLocalValues = [...localValues];

        newLocalValues[index] = parseInt(e.target.value);
        // console.log(newLocalValues)
        setLocalValues(newLocalValues);
        // dispatch(updateSingleProduct({product_id:product_id,addedQuantity:parseInt(e.target.value)}))
        dispatch(updateSingleProduct({product_id:product_id,addedQuantity:parseInt(e.target.value==""?0:parseInt(e.target.value))}))
    }

    const handleIncrement = (e, index,product_id) => {
        let inc=1
        const newLocalValues = [...localValues];
        if (newLocalValues[index] != undefined)
        {
            inc = newLocalValues[index].count +1
            newLocalValues[index] =inc;
        }

        setLocalValues(newLocalValues);
        dispatch(updateSingleProduct({product_id:product_id,addedQuantity:parseInt(inc)}))
    }
    const handleDecrement = (e, index,product_id) => {
        let dec=1
        const newLocalValues = [...localValues];
        if (newLocalValues[index] != undefined)
        {
            dec = newLocalValues[index].count -1
            newLocalValues[index] =dec;
        }

        setLocalValues(newLocalValues);
        dispatch(updateSingleProduct({product_id:product_id,addedQuantity:parseInt(dec)}))
    }
    const total = cartProducts.reduce((acc, item) => acc + (item.count*item.price), 0);

    console.log(cartProducts)
    return (
        <>
            <div className="slider-area ">
                <div className="single-slider slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center">
                                    <h2>Cart List</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="cart_area section_padding">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                {cartProducts.length > 0 && cartProducts.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="media">
                                                <div className="d-flex">
                                                    {/*<img src="/img/gallery/card1.png" alt=""/>*/}
                                                    <img src={`/img/gallery/${item.image}`} alt=""/>
                                                </div>
                                                <div className="media-body">
                                                    <p>{item.name}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>${item.price}</h5>
                                        </td>
                                        <td>
                                            <div className="product_count">
                                              <span className="input-number-decrement"
                                                    onClick={(event) => {
                                                        handleDecrement(event, index,item.id);
                                                    }}
                                              >
                                                  <i className="ti-minus"/>
                                              </span>
                                                <input
                                                    className="input-number"

                                                    value={localValues[index].count} onChange={(event) => handleChange(event, index,item.id)}
                                                />
                                                <span className="input-number-increment"
                                                      onClick={(event) => {
                                                          handleIncrement(event, index,item.id);
                                                      }}

                                                >
                                                <i className="ti-plus"/>
                                                 </span>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>
                                                ${item.price*item.count}
                                            </h5>
                                        </td>
                                    </tr>
                                ))}

                                {/*<tr className="bottom_button">*/}
                                {/*    <td>*/}
                                {/*        /!*<a className="btn_1" href="#">*!/*/}
                                {/*        /!*    Update Cart*!/*/}
                                {/*        /!*</a>*!/*/}
                                {/*    </td>*/}
                                {/*    <td/>*/}
                                {/*    <td/>*/}

                                {/*</tr>*/}
                                <tr>
                                    <td/>
                                    <td/>
                                    <td>
                                        <h5>Subtotal</h5>
                                    </td>
                                    <td>
                                        <h5>${total}</h5>
                                    </td>
                                </tr>
                                <tr className="shipping_area">
                                    <td/>
                                    <td/>
                                    <td>
                                        <h5>Shipping</h5>
                                    </td>
                                    <td>
                                        <div className="shipping_box">
                                            <ul className="list">
                                                <li>
                                                    Flat Rate: $5.00
                                                    <input
                                                        type="radio"
                                                        aria-label="Radio button for following text input"
                                                    />
                                                </li>
                                                <li>
                                                    Free Shipping
                                                    <input
                                                        type="radio"
                                                        aria-label="Radio button for following text input"
                                                    />
                                                </li>
                                                <li>
                                                    Flat Rate: $10.00
                                                    <input
                                                        type="radio"
                                                        aria-label="Radio button for following text input"
                                                    />
                                                </li>
                                                <li className="active">
                                                    Local Delivery: $2.00
                                                    <input
                                                        type="radio"
                                                        aria-label="Radio button for following text input"
                                                    />
                                                </li>
                                            </ul>
                                            <h6>
                                                Calculate Shipping
                                                <i className="fa fa-caret-down" aria-hidden="true"/>
                                            </h6>
                                            <select className="shipping_select">
                                                <option value={1}>Bangladesh</option>
                                                <option value={2}>India</option>
                                                <option value={4}>Pakistan</option>
                                            </select>
                                            <select className="shipping_select section_bg">
                                                <option value={1}>Select a State</option>
                                                <option value={2}>Select a State</option>
                                                <option value={4}>Select a State</option>
                                            </select>
                                            <input
                                                className="post_code"
                                                type="text"
                                                placeholder="Postcode/Zipcode"
                                            />
                                            {/*<a className="btn_1" href="#">*/}
                                            {/*    Update Details*/}
                                            {/*</a>*/}
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="checkout_btn_inner float-right">

                                <Link className="btn_1 checkout_btn_1" href="/checkout">
                                    Proceed to checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Cart