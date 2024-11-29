import React from 'react'
import MainPage from '@pages/index/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<MainPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default main