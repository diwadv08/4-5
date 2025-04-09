import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Welcome from './pages/Welcome';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Header from './component/Header';
import Product from './pages/Product';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/welcome/:user_name" element={<Welcome/>}></Route>
        <Route path="/product/:id" element={<Product/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App