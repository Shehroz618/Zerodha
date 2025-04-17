import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeWrapper from './home/Home_wrap';
import SupportWrap from './support/Support_wrap';
import AboutWrap from './about/About_wrap';
import ProductsWrap from './products/Prodcut_wrap';
import PricingWrap from './pricing/Pricing_wrap';

import PageNotFound from './PageNotfound';
import Navbar from './Navbar';
import FooterSection from './Footer';
import SignupForm from './signup/SingupHero';
import LoginPage from './signup/LoginPage';
function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <Navbar />   
        <Routes>
          <Route path='/home' element={<HomeWrapper/>} />
          <Route path='/' element={<HomeWrapper/>} />
          <Route path='/support' element={<SupportWrap/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
          <Route path='/About' element={<AboutWrap/>}></Route>
          <Route path='/products' element={<ProductsWrap/>}></Route>
          <Route path='/pricing' element={<PricingWrap/>}></Route>\
          <Route path='./support' element={<SupportWrap/>}></Route>
          <Route path='/signup' element={<SignupForm/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>

          
        </Routes>
        <FooterSection/>
    </BrowserRouter>
    </>
  )
}

export default App
