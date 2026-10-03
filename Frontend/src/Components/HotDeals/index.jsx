import { Link } from "react-router"
import right from "../../assets/icons/right.png"
import { useEffect, useState } from "react"
// import { useContext } from "react"
// import { storeContext } from "../../Store"
// import Sale from "../Sale"
import greenApple from "../../assets/images/products/green_apple2.png"
// import celery from "../../assets/images/products/Celery.png"
// import green from "../../assets/images/products/green-.png"
// import eggplant from "../../assets/images/products/eggplant.png"
// import potatoe from "../../assets/images/products/poatto.png"
// import corn from "../../assets/images/products/corn.png"
// import cauliflower from "../../assets/images/products/coul.png"
// import capsicum from "../../assets/images/products/capscium.png"
// import chill from "../../assets/images/products/chill.png"
// import redChill from "../../assets/images/products/red_chill.png"
// import tomatos from "../../assets/images/products/tomato.png"
// import mango from "../../assets/images/products/mango.png"
// import addToCard from "../../assets/icons/Add To Cart.png"
import rating from "../../assets/icons/Rating.png"
import heart from "../../assets/icons/Heart.png"


export default function HotDeals() {
    const baseUrl = "http://localhost:1337"
    const varUrl = "/api/popular-products?filters[isHotDeal][$eq]=true&populate=image,rateStar,shopBag"
    const [popularProducts, setPopularProducts] = useState([])

    useEffect(() => {

        const findPopularProduct = async () => {
            try {
                const response = await fetch(`${baseUrl}${varUrl}`)
                const data = await response.json()
                console.log(data)
                setPopularProducts(data.data)
            }
            catch (error) {
                console.log("error")
            }
        }

        findPopularProduct();

    }, [])

    return (
        <div className="bg-[#F7F7F7] py-5 ">
             <div className="container mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-[24px] lg:text-[32px] md:lg:text-[32px] font-semibold">Hot Deals</h2>
                    <Link to={"/shop"} className="flex items-center gap-3 flex-wrap cursor-pointer">
                        <p className="text-[16px] font-medium text-[#00B207]">View All</p>
                        <img src={right} alt="Right" />
                    </Link>
                </div>
                <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-1 bg-white">
                    <Link to={"/singleProduct"} className=" lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2 col-span-1 row-span-1  p-4 border-2 outline-0 border-[#E6E6E6] focus:border-[#2C742F] focus:border-2 
                              focus:shadow-[0_8px_30px_8px_rgba(44,116,47,0.25)] transition-all
                              duration-300
                              hover:-translate-y-2
                              hover:shadow-lg ">
                        <div>
                            
                            <div className="flex gap-3">
                                <p className=' bg-[#EA4B48] text-white py-0.75 px-2 rounded'>Sale 50</p>
                                <p className="text-white  bg-[#2388FF] py-0.75 px-2 rounded">
                                    Best Sale
                                </p>
                            </div>
                            <img src={greenApple} alt="green_Apple" className="lg:w-119 md:w-full w-full" />
                            
                            <div className="flex items-center justify-center gap-5">
                                <img src={heart} alt="Heart-icon" />
                                <div className="flex items-center gap-4 bg-[#00B207] text-white py-3.5 px-10 rounded-4xl">
                                    <p>Add to Cart</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path fill="currentColor" d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2M9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5z" />
                                    </svg>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" fillRule="evenodd" d="M12.153 3.802c3.734.067 7.309 2.237 9.228 6.14a4.79 4.79 0 0 1 0 4.217c-1.92 3.902-5.494 6.072-9.228 6.14c-3.75.067-7.427-1.99-9.532-6.003a4.84 4.84 0 0 1 0-4.492c2.105-4.013 5.781-6.07 9.532-6.002m-7.761 6.932c3.545-6.759 11.99-6.425 15.195.09c.379.77.379 1.681 0 2.452c-3.205 6.515-11.65 6.849-15.195.09a2.84 2.84 0 0 1 0-2.632" clipRule="evenodd" />
                                    <path fill="currentColor" fillRule="evenodd" d="M15.7 12.05a3.75 3.75 0 1 1-7.5 0a3.75 3.75 0 0 1 7.5 0m-3.75 1.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5" clipRule="evenodd" />
                                </svg>
                            </div>
                            
                            <div className="flex flex-col items-center justify-center gap-3">
                                <h2>Green Apple</h2>
                                <div>
                                    <span>$12.00</span>
                                    <span className="line-through text-[#999999]">$24.00</span>
                                </div>
                                <img src={rating} alt="Rating-icon" />
                                <p className="text-[#999999]">Hurry up! Offer ends In:</p>
                                <div className="flex items-center gap-5">
                                    <div>
                                        <div>
                                            <p className="text-[24px] font-semibold leading-none">
                                                01 :
                                            </p>
                                            <span className="text-sm ">
                                                Days
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p className="text-[24px] font-semibold leading-none">
                                                23 :
                                            </p>
                                            <span className="text-sm ">
                                                Hours
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p className="text-[24px] font-semibold leading-none">
                                                34 :
                                            </p>
                                            <span className="text-sm">
                                                Mins
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p className="text-[24px] font-semibold leading-none">
                                                57
                                            </p>
                                            <span className="text-sm">
                                                Secs
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link> 
                    {
                        popularProducts.map((popularProduct) => {
                            return (< div className="flex w-full " key={popularProduct.id} >
                                <Link to={"/singleProduct"} className=" w-full border-2 outline-0 border-[#E6E6E6] p-2 focus:border-[#2C742F] focus:border-2 
                                focus:shadow-[0_8px_30px_8px_rgba(44,116,47,0.25)] transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:shadow-lg">
                                    {popularProduct.sale == "Sale 50%" && <p className='w-20 h-6.75 bg-[#EA4B48] text-white rounded pl-2'>{popularProduct.sale}</p>}
                                    <img src={`http://localhost:1337${popularProduct.image?.url}`} alt={popularProduct.name} />
                                    <div className="flex items-center justify-around">
                                        <div>
                                            <p>{popularProduct.name}</p>
                                            <span className="text-[16px] font-light py-2">{popularProduct.price} </span>
                                            <span className="text-[16px] font-light text-[#999999] line-through">{popularProduct.oldPrice}</span>
                                            <div className="focus:bg-[#2C742F]">
                                                <img src={`http://localhost:1337${popularProduct.rateStar?.url}`} alt={popularProduct.name} />
                                            </div>
                                        </div>
                                        <img src={`http://localhost:1337${popularProduct.shopBag?.url}`} alt={popularProduct.name} />
                                    </div>
                                </Link>
                            </div>)
                        })
                    }

                </div>
            </div>
        </div>
    )
}
