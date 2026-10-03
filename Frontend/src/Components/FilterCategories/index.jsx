import { useEffect, useState } from "react"
import { Link } from "react-router";
// import PopularProducts from "../PopularProducts";
// // import PopularProducts from './../PopularProducts/index';


export default function FilterCategories() {

  const [disApper, setDisApper] = useState(false);
  const baseUrl = "http://localhost:1337"
  const varUrl = "/api/categories?populate=*"
  const varUrl2 = "/api/products?populate=*"
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  const changeApper = () => {
    setDisApper(!disApper)
  }


  const filterProducts = async (categoryId) => {
    try {
      const response = await fetch(
        `${baseUrl}/api/products?filters[category][id][$eq]=${categoryId}&populate=*`
      )

      const data = await response.json()

      setProducts(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    const fetchApi = async () => {
      try {
        const response = await fetch(`${baseUrl}${varUrl}`, { method: "GET" })

        const data = await response.json()
        console.log(data.data)
        setCategories(data.data)
      } catch (error) {
        console.log(error)
      }

    }

    fetchApi();

  }, [])


  useEffect(() => {

    const productApi = async () => {
      try {
        const responseProduct = await fetch(`${baseUrl}${varUrl2}`, { method: "GET" })
        const productData = await responseProduct.json()
        console.log(productData)
        setProducts(productData.data)
      } catch (error) {
        console.log(error)
      }
    }
    productApi();
  }, [])


  return (
    <div className="container flex xl:gap-24 lg:gap-20 md:gap-16 gap-10 mb-12">
      <div className="flex flex-col gap-3">
        <div className="flex items-center">
          <h3 className="text-[20px]">All Categories</h3>
          {/* icon down */}
          {
            disApper === true ? null : (<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" onClick={changeApper} className="cursor-pointer">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" fillRule="evenodd" d="M16.53 8.97a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L12 12.44l3.47-3.47a.75.75 0 0 1 1.06 0" clipRule="evenodd" />
            </svg>)
          }

          {/* icon up */}
          {
            disApper === true ? (<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" onClick={changeApper} className="cursor-pointer">
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" fillRule="evenodd" d="M16.53 14.03a.75.75 0 0 1-1.06 0L12 10.56l-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06" clipRule="evenodd" />
            </svg>) : null
          }

        </div>
        {
          disApper === false ? (<div className="flex flex-col gap-2">
            {
              categories.map((categories) => {
                return (<div key={categories.id}>
                  <input
                    type="radio"
                    id={categories.nameCatego}
                    name="allCategories"
                    value={categories.id}
                    onChange={() => filterProducts(categories.id)}
                  />
                  <label htmlFor={categories.nameCatego} className="pl-2">
                    {categories.nameCatego}
                  </label>
                </div>)
              })
            }
          </div>) : null
        }
      </div>
      <div className="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
        {
          products.map((product) => {
            return (< div className="flex w-full " key={product.id} >
              <Link to={"/singleProduct"} className="w-full border-2 outline-0 border-[#E6E6E6] p-2 focus:border-[#2C742F] focus:border-2 
              focus:shadow-[0_8px_30px_8px_rgba(44,116,47,0.25)] transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-lg">
                <div className="flex justify-between">
                  {product.sale == "Sale 50%" && <p className='w-20 h-6.75 bg-[#EA4B48] text-white rounded pl-2'>{product.sale}</p>}
                  {product.outOfStock == true && <p className='w-26 h-6.75 bg-[black] text-white rounded pl-2'>Out of stock</p>}
                </div>
                <img src={`http://localhost:1337${product.ProductImage?.url}`} alt={product.productName} className="w-110 h-70" />
                <div className="flex items-center justify-around">
                  <div>
                    <p>{product.productName}</p>
                    <span className="text-[16px] font-light py-2">{product.productPrice} </span>
                    <span className="text-[16px] font-light text-[#999999] line-through">{product.oldPrice}</span>
                    <div className="focus:bg-[#2C742F]">
                      <img src={`http://localhost:1337${product.rateStar?.url}`} alt={product.productName} />
                    </div>
                  </div>
                  <img src={`http://localhost:1337${product.shopBag?.url}`} alt={product.productName} />
                </div>
              </Link>
            </div>)
          })
        }

      </div>

    </div>

  )
}


