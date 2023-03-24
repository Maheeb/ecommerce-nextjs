import ShortDetail from "@/components/common/ShortDetail";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";

function ProductDetail({ slug }) {
    const router = useRouter();
    let product =useSelector(state => (state.create.products).filter(item => item.id == slug));
    // console.log(product)

    return (
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

            <ShortDetail productDetail={product}/>

        </>
    )
}

export default ProductDetail;

export async function getServerSideProps(context) {
    const { slug } = context.query;
    return {
        props: {
            slug, // Pass slug to the component as a prop
        },
    };
}