import React from 'react'
import MainPage from "./pages/index"
import About from './pages/about';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<MainPage/>}></Route>
        <Route index path="/about" element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default main