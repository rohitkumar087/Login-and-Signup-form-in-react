import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Nav from './Nav'
import SignUp from './SignUp'
import LogIn from './LogIn'
import Home from './Home'
import Fetch from './Fetch'


function App() {

      return (
            <>
                  <BrowserRouter>
                        <Routes>
                              <Route path='/' element={<Home />}></Route>
                              <Route path='/signup' element={<SignUp />}></Route>
                              <Route path='/login' element={<LogIn />}></Route>
                              <Route path='/fetch' element={<Fetch/>}></Route>
                        </Routes>
                  </BrowserRouter>
            </>
      )
}

export default App
