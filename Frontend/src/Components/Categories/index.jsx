import right from "../../assets/icons/right.png"
import { useEffect, useState } from "react"
import { Link } from "react-router"

export default function Categories({ viewAllHidden, popularHidden }) {

  //     const pageName = ""
  //   const className = ""
  //   // const viewAllHidden = ""
  //   // const popularHidden = ""
  //   const hiddenImg = ""

  //vars
  const baseUrl = "http://localhost:1337"
  const varUrl = "/api/categories?populate=*&sort=nameCatego:asc"
  const [products, setProducts] = useState([])

  useEffect(() => {

    const fetchApi = async () => {
      try {
        const response = await fetch(`${baseUrl}${varUrl}`, { method: "GET" })

        const data = await response.json()
        // console.log(data)
        setProducts(data.data)
      } catch (error) {
        console.log(error)
      }

    }

    fetchApi();

  }, [])


  return (
    <div className="container pb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] lg:text-[32px] md:lg:text-[32px] font-semibold">Popular Categories</h2>
        <Link to={"/shop"} className="flex items-center gap-3 flex-wrap ">
          <p className="text-[16px] font-medium text-[#00B207]">View All</p>
          <img src={right} alt="Right" />
        </Link>
      </div>
      <div className=" grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 my-4">
        {
          products.map((product) => {
            return (
              <div key={product.id} className=" xl:m-3 lg:m-2 md:m-2 m-1 flex flex-col items-center justify-center w-[calc(100% - 10px)] lg:w-[calc((100% - 10px)) / 6] md:[calc((100% - 10px)) / 3] border-2 outline-none border-[#E6E6E6] focus:border-[#2C742F]  focus:border-2 focus:shadow-[0_8px_30px_8px_rgba(44,116,47,0.25)] rounded-lg">
                <img src={`${baseUrl}${product.image.url}`} alt={product.nameCatego} className="transition-all duration-500 ease-in-out hover:scale-110 hover:-translate-y-1" />
                <p className='text-[18px] font-medium'>{product.nameCatego}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
