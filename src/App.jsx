import React from 'react'
import LoginPage from './pages/Loginpage/LoginPage'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import CompanyList from './pages//CompanyList/CompanyList'
import CompanyDeatails from './pages/CompanyDeatails/CompanyDeatails'
import Error from './pages/Error404/Error'
import Authorize from './pages/Athorize/Authorize'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/company' element={<CompanyList />}></Route>
        <Route path='/company/add' element={<CompanyDeatails />}></Route>
        <Route path='/error' element={<Error />}></Route>
        <Route path='/authorize' element={<Authorize />}></Route>
        <Route path='/*' element={<Error />}></Route>
      </Routes>
    </div>
  )
}

export default App
