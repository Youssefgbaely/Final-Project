import { BrowserRouter, Route, Routes } from "react-router";
import Bottom_navbar from "./Components/Bottom_navbar";
import Middle_header from "./Components/Middle_header";
import Top_header from "./Components/Top_header";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Pages from "./Pages/Pages";
import Blog from "./Pages/Blog";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
// import SideBar from "./Components/SideBar";

import Fruits from "./Pages/Fruits";
import ShopCart from "./Pages/ShopCart";
import SingleProduct from "./Pages/SingleProduct";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import HotPrice from "./Pages/HotPrice";


export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Shop />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/shop-cart" element={<ShopCart />} />
          
          <Route path="/singleProduct" element={<SingleProduct />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/account/Create Account" element={<Register/>} />
          <Route path="/hotPrice" element={<HotPrice/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
