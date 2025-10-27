import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../page/Home'
import InternetReserve from '../page/InternetReserve'
import ContactPage from '../page/Contact'
import AboutDrAbrisham from '../page/AboutDrAbrisham'
import Article from '../page/Article'
import Services from '../page/Services'
function AppRoutes() {
  return (
    <BrowserRouter basename="/drAbrishamkar">
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/internetReserve' element={<InternetReserve/>}/>

<Route path='/contact' element={<ContactPage/>}/>
<Route path='/aboutDrAbrisham' element={<AboutDrAbrisham/>}/>
<Route path='/article' element={<Article/>}/>
<Route path='/services' element={<Services/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
