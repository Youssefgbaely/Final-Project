import Arrow_up from "../../assets/icons/Arrow -- up.png"
// import chinese_ca1 from "../../assets/images/products/chinese ca1.jpg"
// import chinese_ca2 from "../../assets/images/products/chinese ca2.jpg"
// import chinese_ca3 from "../../assets/images/products/chinese ca3.jpg"
// import chinese_ca4 from "../../assets/images/products/chinese ca4.jpg"
import Arrow_down from "../../assets/icons/Arrow -- down.png"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import brand from "../../assets/icons/brand.png"
import facebook from "../../assets/icons/facebook.png"
import tiwetter from "../../assets/icons/tiwetter.png"
import pinterest from "../../assets/icons/p.png"
import inestgram from "../../assets/icons/instgram.png"
import heart from "../../assets/icons/Heart.png"

export default function PopSingleProduct() {
    const { id } = useParams()

    const baseurl = "http://localhost:1337"
    const varurl = `/api/products/${id}?populate=*`
    // useState for api product
    const [product, setProduct] = useState(null)
    // useState for buy more than one 
    const [changeCounter, setChangeCounter] = useState(0);

    const addProduct = () => {
        setChangeCounter(changeCounter + 1);
    }

    const minusProduct = () => {
        if (changeCounter > 0) {
            setChangeCounter(changeCounter - 1);
        }
    }




    const fetchSinglePost = async () => {
        try {
            const response = await fetch(`${baseurl}${varurl}`, { method: "GET" })
            const data = await response.json()
            console.log(data.data)
            console.log(data.data?.ProductImage)

            setProduct(data.data)
        } catch (error) {
            console.log("error")
        }
    }
    useEffect(() => {
        fetchSinglePost()
    }, [id])


    // const rateProduct = () => {

    // }



    return (
        <div className="container py-7">
            {
                product &&
                (<div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                    <div className="flex items-center">
                        <div>
                            <img src={Arrow_up} alt="Arrow_up" className="m-auto pb-10 cursor-pointer" />
                            <img src={`http://localhost:1337${product.ProductImage?.url}`} alt="chinese_ca1" className="w-25 h-25 border-2 border-transparent cursor-pointer active:border-[#00B207] duration-300 " />
                            <img src={`http://localhost:1337${product.ProductImage?.url}`} alt="chinese_ca2" className="w-25 h-25 border-2 border-transparent cursor-pointer active:border-[#00B207] duration-300 " />
                            <img src={`http://localhost:1337${product.ProductImage?.url}`} alt="chinese_ca3" className="w-25 h-25 border-2 border-transparent cursor-pointer active:border-[#00B207] duration-300 " />
                            <img src={`http://localhost:1337${product.ProductImage?.url}`} alt="chinese_ca4" className="w-25 h-25 border-2 border-transparent cursor-pointer active:border-[#00B207] duration-300 " />
                            <img src={Arrow_down} alt="Arrow_down" className="m-auto pt-10 cursor-pointer " />
                        </div>
                        <div>
                            <img src={`http://localhost:1337${product.ProductImage?.url}`} alt="chinese_ca1" className="w-190 h-150 " />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-3">
                            <h2 className="lg:font-semibold md:font-semibold font-medium lg:text-[36px] md:text-[30px]">{product.productName}</h2>
                            {
                                product.outOfStock === true ? (<span className="text-[#2C742F] bg-[#20B52633] py-1 px-2 rounded">Out Of Stock</span>)
                                    : (<span className="text-[#2C742F] bg-[#20B52633] py-1 px-2 rounded">In Stock</span>)
                            }

                        </div>
                        {/* this container for rate */}
                        <div className="flex">
                            {
                                [1, 2, 3, 4, 5].map((element, star) => {
                                    return (
                                        < div key={star} className={`text-3xl font-medium cursor-pointer ${star <= product.numberOfStars ? "text-yellow-400" : "text-gray-500"}`}>
                                            {star <= product.numberOfStars ? "★" : "☆"}
                                        </div>
                                    )
                                })
                            }

                        </div>
                        {/* this container for price and descount */}
                        <div className="flex items-center gap-4 py-6">
                            {product.sale !== 0 ? (
                                <>
                                    <span className="text-[#B3B3B3] line-through text-3xl">${product.productPrice}</span>
                                    <span className="text-[24px] font-medium text-[#2C742F] text-3xl">${product.productPrice * (1 - product.sale / 100)}</span>
                                    <span className="text-3xl text-[#EA4B48] bg-[#EA4B481A] p-2 rounded-xl">{product.sale}% off</span>
                                </>
                            ) : (
                                <>
                                    <span className="text-3xl">${product.productPrice}</span>
                                </>
                            )}
                        </div >
                        <hr className="text-[#E5E5E5]" />
                        <div className="flex items-center justify-between w-full py-6 flex-wrap">
                            <div className="flex items-center gap-3">
                                <h3>Brand:</h3>
                                <img src={brand} alt="brand-icon" />
                            </div>
                            <div className="flex items-center py-5 gap-4">
                                <p>Share item</p>
                                <a href="https://www.facebook.com/"><img src={facebook} alt="facebook" /></a>
                                <a href="https://x.com/"><img src={tiwetter} alt="tiwetter" /></a>
                                <a href="https://www.pinterest.com/"><img src={pinterest} alt="pinterest" /></a>
                                <a href="https://www.instagram.com/"><img src={inestgram} alt="inestgram" /></a>
                            </div>
                        </div>
                        <p className="text-[#808080] pb-5">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. </p>
                        <hr className="text-[#E5E5E5]" />
                        {/* add to card section*/}
                        <div className="flex items-center justify-between py-6 flex-wrap">
                            {/* calucalte the number of product you want add to card */}
                            <div className="flex items-center border-2 border-black p-4 rounded-full">
                                {/* minus the product */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" className="cursor-pointer bg-[#F2F2F2] rounded-full" onClick={minusProduct}>
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <g fill="none" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" d="M16 12H8" />
                                        <circle cx="12" cy="12" r="10" />
                                    </g>
                                </svg>
                                <p className="px-4 font-semibold text-xl">{changeCounter}</p>
                                {/* add product */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" className="cursor-pointer bg-[#F2F2F2] rounded-full" onClick={addProduct}>
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <g fill="none" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" d="M12 8v4m0 0v4m0-4h4m-4 0H8" />
                                        <circle cx="12" cy="12" r="10" />
                                    </g>
                                </svg>
                            </div>
                            {/* add to card button */}
                            <Link to={'/shop-cart'} className="flex items-center lg:gap-4 md:gap-4 gap-5 bg-[#00B207] text-white py-3.5 px-10 rounded-4xl">
                                <p>Add to Cart</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2M9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5z" />
                                </svg>
                            </Link>
                            <img src={heart} alt="heart-icon" className="bg-[#20B5261A] p-5 rounded-full" />
                        </div>
                        <hr className="text-[#E5E5E5]" />
                        {/* category and tag */}
                        <div>
                            <h3 className="font-medium py-4">Category: <span className="text-[#808080]">Vegetables</span></h3>
                            <h3 className="font-medium">Tag: <span className="text-[#808080]">Vegetables Healthy Chinese Chinese Green Cabbage</span></h3>
                        </div>
                    </div>
                </div>)
            }

        </div>
    )
}
