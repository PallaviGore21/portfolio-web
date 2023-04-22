import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Mynavbar from './componenet/Mynavbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

const App = () => {
  return<>
  <BrowserRouter>
  <Mynavbar/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Resume' element={<Resume/>}></Route>
    <Route path='/Portfolio' element={<Portfolio/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
  </Routes>
  </BrowserRouter>
  
  </>
}

export default App