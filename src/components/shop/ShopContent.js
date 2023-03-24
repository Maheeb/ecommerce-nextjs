import ShopItem from "@/components/shop/ShopItem";
import {useSelector} from "react-redux";

function ShopContent() {
    let newItems =useSelector(state => (state.create.products).filter(item => item.tag==='new'));
    let allItems =useSelector(state => (state.create.products));
    let sortedItems = [...allItems].sort((a, b) => b.price - a.price)
    let popularItems =useSelector(state => (state.create.products).filter(item => item.tag==='popular'));

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
                    {/*<div className="select-this">*/}
                    {/*    <form action="#">*/}
                    {/*        <div className="select-itms">*/}
                    {/*            <select name="select" id="select1">*/}
                    {/*                <option value="">40 per page</option>*/}
                    {/*                <option value="">50 per page</option>*/}
                    {/*                <option value="">60 per page</option>*/}
                    {/*                <option value="">70 per page</option>*/}
                    {/*            </select>*/}
                    {/*        </div>*/}
                    {/*    </form>*/}
                    {/*</div>*/}
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
                       <ShopItem items={newItems}/>
                    </div>
                    {/* Card two */}
                    <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                    >
                        <ShopItem items={sortedItems}/>
                    </div>
                    {/* Card three */}
                    <div
                        className="tab-pane fade"
                        id="nav-contact"
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                    >
                      <ShopItem items={popularItems}/>
                    </div>
                </div>
                {/* End Nav Card */}
            </div>
        </section>

    )
}
export default ShopContent