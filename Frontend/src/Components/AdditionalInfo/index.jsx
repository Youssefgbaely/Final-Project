import vegebaleVideo from "../../assets/videos/Slow Motion Stock Video Footage - Vegetables(1080P_HD).mp4"
import discount from "../../assets/icons/discount.png"
import organic from "../../assets/icons/organic.png"
import { useParams } from "react-router"
import { useEffect, useState } from "react"


export default function AdditionalInfo() {

    const { id } = useParams()
    const baseUrl = "http://localhost:1337"
    const varUrl = `/api/products/${id}?populate=*`
    // useState for save product data
    const [product, setProduct] = useState(null)


    const fetchApi = async () => {
        try {
            const response = await fetch(`${baseUrl}${varUrl}`, { method: "GET" })
            const data = await response.json();
            console.log(data)
            setProduct(data.data);

        } catch (Error) {
            console.log("error")
        }

    }
    useEffect(() => {
        fetchApi()
    }, [id])

    return (
        <div className='container pt-5'>
            
            {product && (<div className='py-6 grid lg:grid-cols-2 lg-gap-52 md:gap-10 gap-1 md:grid-cols-1 pb-10'>
                <div className="flex">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-8">
                           <h3>Weight:</h3>
                           <p className="text-[#666666]">{product.weight}</p>
                        </div>
                        <div className="flex items-center gap-8">
                           <h3>Color:</h3>
                           <p className="text-[#666666]">{product.color}</p>
                        </div>
                        <div className="flex items-center gap-8">
                           <h3>Type:</h3>
                           <p className="text-[#666666]">{product.type}</p>
                        </div>
                        <div className="flex items-center gap-8">
                           <h3>Category:</h3>
                           <p className="text-[#666666]">{product.category.nameCatego}</p>
                        </div>
                        <div className="flex items-center gap-8">
                           <h3>Stock Status:</h3>
                           <p className="text-[#666666]">{product.outOfStock === true ? ("Not available") : ("available")}</p>
                        </div>
                        <div className="flex items-center gap-8">
                           <h3>Tags:</h3>
                           <p className="text-[#666666]">{product.tags}</p>
                        </div>
                        
                    </div>
                </div>
                <div>
                    <video src={vegebaleVideo} className="w-134 h-75 xl:pb-8 pb-4"></video>
                    <div className="grid grid-cols-2 border border-[#E5E5E5] xl:w-134 lg:w-100 py-6 px-5">
                        <div className="flex items-center gap-3">
                            <img src={discount} alt="discount-icon" />
                            <div className="flex flex-col justify-center">
                                <h4 className="font-medium">{ } Discount</h4>
                                <p className="text-[#808080]">Save your { } money with us</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={organic} alt="organic-icon" />
                            <div className="flex flex-col justify-center">
                                <h4 className="font-medium">100% Organic</h4>
                                <p className="text-[#808080]">100% Organic Vegetables</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}

        </div>
    )
}

