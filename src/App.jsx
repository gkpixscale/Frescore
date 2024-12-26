import React from 'react'
import LoginPage from './pages/Loginpage/LoginPage'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import CompanyList from './pages//CompanyList/CompanyList'
import CompanyDeatails from './pages/CompanyDeatails/CompanyDeatails'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/company' element={<CompanyList />}></Route>
        <Route path='/company/add' element={<CompanyDeatails />}></Route>

      </Routes>
    </div>
  )
}

export default App
