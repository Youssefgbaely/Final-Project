
import { useContext } from 'react'
import Top_header from '../../Components/Top_header'
import { storeContext } from '../../Store'
import Middle_header from '../../Components/Middle_header'
import Bottom_navbar from '../../Components/Bottom_navbar'
import SideBar from '../../Components/SideBar'
import Banner from '../../Components/Banner'
import BannerShop from '../../Components/BannerShop'
import PopSingleProduct from '../../Components/PopSingleProduct'
// import DescriptionProduct from '../../Components/DescriptionProduct'
// import AdditionalInfo from '../../Components/AdditionalInfo'
import FeaturedProducts from './../../Components/FeaturedProducts/index';
import Newsletter from './../../Components/Newsletter/index';
import Footer from './../../Components/Footer/index';
import ProductTab from '../../Components/ProductTab'

export default function SingleProduct() {
  const { className } = useContext(storeContext)
  return (
    <div>
      <Top_header className={className} />
      <Middle_header />
      <hr className="border-gray-300" />
      <Bottom_navbar />
      <div className="absolute left-3 z-50">
        <SideBar />
      </div>
      <Banner childPageWord="Vegetables" pageName="Categories" />
      <PopSingleProduct />
      {/* <DescriptionProduct/> */}
      <ProductTab/>
      <div className='pb-18'>
        <FeaturedProducts />
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}
