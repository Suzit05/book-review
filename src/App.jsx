import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Admin from './Pages/Admin'
import Booklist from './Pages/Booklist'
import UserProfile from './Pages/UserProfile'
import Bookdetail from './Pages/Bookdetail'
import { AuthContext } from './Context/AuthContext'
import PrivateRoutes from './Components/PrivateRoutes'


const App = () => {
  let { isloggedin, login, logout } = useContext(AuthContext)
  return (
    <>
      <div className='bg-zinc-600 w-full h-full'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Profile' element={<PrivateRoutes><UserProfile /></PrivateRoutes>} />
            <Route path='/Booklist' element={<Booklist />} />
            <Route path="Bookdetail/:bookid" element={<Bookdetail />} />
            <Route path="/Admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App