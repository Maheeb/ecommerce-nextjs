import {useSelector} from "react-redux";
import Swal from "sweetalert2";
import {useState} from "react";

function CheckoutContent() {
    const cartProducts = useSelector(state => state.create.productTaken);
    const total = cartProducts.length>0 && cartProducts.reduce((acc, item) => acc + (item.count*item.price), 0);

// console.log(total)
    const [fn, setInput1] = useState("");
    const [ln, setInput2] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [town, setTown] = useState("");
    const [address1,setAddress1] = useState("");
    const [address2,setAddress2] = useState("");
    const [zip, setZip] = useState("");
    const [terms, setTerms] = useState(false);

    const [errors, setErrors] = useState({
        fn: "",
        ln: "",
        phone: "",
        email: "",
        town: "",
        address1: "",
        address2: "",
        zip: "",
        terms:false
    });

    const handleTerm =event =>{
        setTerms(!terms)

    }
    const handleChange = event => {
        if (event.target.name === "fn") {
            setInput1(event.target.value);
        }
        if (event.target.name === "ln") {
            setInput2(event.target.value);
        }
        if (event.target.name === "phone") {
            setPhone(event.target.value);
        }
        if (event.target.name === "email") {
            setEmail(event.target.value);
        }
        if (event.target.name === "town") {
            setTown(event.target.value);
        }
        if (event.target.name === "address1") {
            setAddress1(event.target.value);
        }
        if (event.target.name === "address2") {
            setAddress2(event.target.value);
        }
        if (event.target.name === "zip") {
            setZip(event.target.value);
        }
    };
    const validate = () => {
        let errors = {};
        let formIsValid = true;

        if (!fn) {
            formIsValid = false;
            errors["fn"] = "Cannot be empty";
        }
        if (!ln) {
            formIsValid = false;
            errors["ln"] = "Cannot be empty";
        }
        if (!phone) {
            formIsValid = false;
            errors["phone"] = "Cannot be empty";
        }
        if (!email) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }
        if (!town) {
            formIsValid = false;
            errors["town"] = "Cannot be empty";
        }
        if (!address1) {
            formIsValid = false;
            errors["address"] = "Cannot be empty";
        }
        if (!address2) {
            formIsValid = false;
            errors["address"] = "Cannot be empty";
        }

        if (!zip) {
            formIsValid = false;
            errors["zip"] = "Cannot be empty";
        }
        if (terms ==false) {
            formIsValid = false;
            errors["terms"] = "Terms and conditions should be accepted";
        }
        setErrors(errors);
        return formIsValid;
    };
    const handleSubmit = event => {
        event.preventDefault();

        if (validate()) {
            Swal.fire({
                position: '',
                icon: 'success',
                title: 'Congrats! Your order has been placed',
                showConfirmButton: false,
                timer: 1500
            });

            // dispatch(clearCart({type:'yes'}));
            // save the data
            location.reload()
        }
    };

    return(
        <>
            <section className="checkout_area section_padding">
                <div className="container">

                    <div className="billing_details">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3>Billing Details</h3>
                                <form
                                    className="row contact_form"
                                >
                                    <div className="col-md-6 form-group p_star">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="first"
                                            name="fn"
                                            value={fn}
                                            onChange={handleChange}
                                            placeholder="First name*"
                                        />
                                        {errors.fn && <p style={{color:'red'}}>{errors.fn}</p>}
                                    </div>
                                    <div className="col-md-6 form-group p_star">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="last"
                                            name="ln"
                                            value={ln}
                                            onChange={handleChange}
                                            placeholder="Last name*"
                                        />
                                        {errors.ln && <p style={{color:'red'}}>{errors.ln}</p>}
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="company"
                                            name="company"
                                            placeholder="Company name"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group p_star">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="number"
                                            name="phone"
                                            value={phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number*"
                                        />
                                        {errors.phone && <p style={{color:'red'}}>{errors.phone}</p>}
                                    </div>
                                    <div className="col-md-6 form-group p_star">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={email}
                                            onChange={handleChange}
                                            placeholder="Email Address*"
                                        />
                                        {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
                                    </div>
                                    <div className="col-md-12 form-group p_star">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="add1"
                                            name="address1"
                                            value={address1}
                                            onChange={handleChange}
                                            placeholder="Address line 01*"
                                        />
                                        {errors.address1 && <p style={{color:'red'}}>{errors.address1}</p>}

                                    </div>
                                    <div className="col-md-12 form-group p_star">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="add2"
                                            name="address2"
                                            value={address2}
                                            onChange={handleChange}
                                            placeholder="Address line 02*"
                                        />
                                        {errors.address2 && <p style={{color:'red'}}>{errors.address2}</p>}
                                    </div>
                                    <div className="col-md-12 form-group p_star">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            name="town"
                                            value={town}
                                            onChange={handleChange}
                                            placeholder="Town/City*"
                                        />
                                        {errors.town && <p style={{color:'red'}}>{errors.town}</p>}
                                    </div>
                                    <div className="col-md-12 form-group p_star">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="zip"
                                            name="zip"
                                            value={zip}
                                            onChange={handleChange}
                                            placeholder="zip*"
                                        />
                                        {errors.zip && <p style={{color:'red'}}>{errors.zip}</p>}

                                    </div>
                                    <div className="col-md-12 form-group">
                                        <div className="creat_account">
                                            <h3>Shipping Details</h3>
                                        </div>
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            id="message"
                                            rows={1}
                                            placeholder="Order Notes"
                                            defaultValue={""}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-4">
                                <div className="order_box">
                                    <h2>Your Order</h2>
                                    <ul className="list">
                                        <li>
                                            <a href="#">
                                                Product
                                                <span>Total</span>
                                            </a>
                                        </li>
                                        {cartProducts.length > 0 && cartProducts.map( (item,index)=>(
                                        <li key={index}>
                                            <a href="#">
                                                {item.name}
                                                <span className="middle">x {item.count}</span>
                                                <span className="last">${item.count * item.price}  </span>
                                            </a>
                                        </li>

                                            ))}

                                    </ul>
                                    <ul className="list list_2">
                                        <li>
                                            <a href="#">
                                                Subtotal
                                                <span>${total}</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Shipping
                                                <span>Flat rate: $50.00</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Total
                                                <span>${total===false?0:(parseInt(total) +50)}</span>
                                            </a>
                                        </li>
                                    </ul>

                                    <div className="creat_account">
                                        <input type="checkbox" id="f-option4" name="terms" onClick={handleTerm}/>
                                        <label htmlFor="f-option4">I’ve read and accept the </label>
                                        <a href="#"> terms &amp; conditions*</a>
                                    </div>
                                    {errors.terms && <p style={{color:'red'}}>{errors.terms}</p>}

                                    <a className="btn_3" href="#" onClick={handleSubmit}>
                                        Proceed
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CheckoutContent