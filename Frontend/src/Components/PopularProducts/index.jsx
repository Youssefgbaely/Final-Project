
import right from "../../assets/icons/right.png"
import { Link } from "react-router"
import { useEffect, useState } from "react"

export default function PopularProducts() {
  const baseUrl = "http://localhost:1337"
  const varUrl = "/api/popular-products?filters[isPopular][$eq]=true&populate=image,rateStar,shopBag"
  const [popularProducts , setPopularProducts] = useState([])

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
    <div className="container pb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] lg:text-[32px] md:lg:text-[32px] font-semibold">Popular Products</h2>
        <Link to={"/shop"} className="flex items-center gap-3 flex-wrap ">
          <p className="text-[16px] font-medium text-[#00B207]">View All</p>
          <img src={right} alt="Right" />
        </Link>
      </div>
      <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-1 ">
        {
          popularProducts.map((popularProduct) => {
            return (< div className="flex w-full " key={popularProduct.id} >
              <Link to={"/singleProduct"} className="w-full border-2 outline-0 border-[#E6E6E6] p-2 focus:border-[#2C742F] focus:border-2 
              focus:shadow-[0_8px_30px_8px_rgba(44,116,47,0.25)] transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-lg">
              { popularProduct.sale == "Sale 50%" && <p className='w-20 h-6.75 bg-[#EA4B48] text-white rounded pl-2'>{popularProduct.sale}</p>}
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
    </div >
  )
}
