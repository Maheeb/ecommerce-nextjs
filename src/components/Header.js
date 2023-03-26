import Cart from "@/components/common/cart";
import {useRouter} from "next/router";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

function Header() {
    const router = useRouter();
    const [inputText, setInputText] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    let products =useSelector(state => (state.create.products));
    const { asPath } = useRouter()

    const checkUrl =asPath.includes("detail") ?'/detail':"detail";

    const handleClick = (e) => {
        e.preventDefault();
        router.push(<Cart/>);
    };

    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    let clearSearch = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText("");
    };

    const filteredData = products.filter((el) => {
        //if no input the return the original
        if (inputText === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(inputText)
        }
    })

    useEffect(()=>{
        if (inputText === '')
        {
            setIsOpen(false)
        }
        else
        {
            setIsOpen(true)
        }

    },[inputText])
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
                                    <a href="/">
                                        <img src="/img/logo/logo.png" alt="" />
                                    </a>
                                </div>
                                <div className="main-menu d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li>
                                                <Link href="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link href="/shop">shop</Link>
                                            </li>
                                            <li>
                                                <Link href="/about">about</Link>
                                            </li>


                                            <li>
                                                <Link href="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="header-right">
                                    <ul>
                                        <li>
                                            {/*<div className="nav-search search-switch">*/}
                                            {/*    <span className="flaticon-search" />*/}
                                            {/*</div>*/}
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="search"
                                                name="search"
                                                placeholder="Search here"
                                                onChange={inputHandler}
                                            />


                                        </li>
                                        <li>

                                            <a href="login.html">
                                                <span className="flaticon-user" />
                                            </a>
                                        </li>
                                        <li>
                                            <Link href="/cart">
                                                <span className="flaticon-shopping-cart"/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    {isOpen && filteredData.length > 0 && (
                                        <ul style={{ position: "absolute", zIndex: 1,marginTop:'20px',marginLeft:'-485px',backgroundColor:'#f9f9f9',minWidth:'325px',boxShadow:' 0px 8px 16px 0px rgba(0,0,0,0.2)',listStyle:'none' }}>
                                            {filteredData.map((suggestion, index) => (
                                                <li key={index}>
                                                    <Link href={`${checkUrl}/${suggestion.id}`}
                                                          style={{color:'black',padding:'12px 16px',textDecoration:'none',display:'block'}}
                                                    >
                                                        {suggestion.name}
                                                    </Link>

                                                </li>
                                            ))}
                                        </ul>
                                    )}

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