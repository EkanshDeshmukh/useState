import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Show from './components/Show'
import Home from './components/Home'
import Service from './components/Service'



function App() {
  return (
    <div className='p-[5%]'>
      <nav className='flex justify-center gap-10'>
        <Link to='/'>Home</Link>
        <Link to='/show'>Show</Link>
        <Link to='/service'>Service</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/show' element={<Show />} />
        <Route path='/service' element={<Service />} />
      </Routes>
    </div>
  )
}

export default App