import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import AboutUs from "./AboutUs"
import Home from "./Home"

import NonVeg from "./NonVeg"
import Cart from "./Cart"
import ContactUs from "./ContactUs"
import PurchaseHistory from "./PurchaseHistory"
import './App.css'
import Veg from "./veg"
import { useSelector } from "react-redux"

function App() {
  const cart=useSelector((State)=>State.cart);
  const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0);
  return (
    <>
    <h1>this is main page</h1>
      <h1>this is the edited part</h1>
    <BrowserRouter>
   <Link to='/home'>Home</Link>
   <Link to='/veg'>Veg</Link>
   <Link to='/nonveg'>NonVeg</Link>
   <Link to='/cart'>Cart{totalItems}</Link>
   <Link to='/purchasehistory'>PurchaseHistory</Link>
   <Link to='/aboutus'>AboutUs</Link>
   <Link to='/contactus'>ContactUs</Link>
   <Routes >
    <Route path="/home" element={<Home/>}/>
    <Route path="/veg" element={<Veg/>}/>
    <Route path="/nonveg" element={<NonVeg/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/purchasehistory" element={<PurchaseHistory/>}/>
    <Route path="/aboutus" element={<AboutUs/>}/>
    <Route path="/contactus" element={<ContactUs/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}
export default App
