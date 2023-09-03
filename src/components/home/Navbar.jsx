import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.png'

const Navbar = () => (
  <div>
    <nav className='bg-[#1C2B35] h-[80px] grid grid-cols-12 sticky'>
      {/* logo  */}
      <div className='grid col-span-4 ml-[100px] align-middle items-center'>
        <Link to="/"><img src={logo} alt="" /></Link>
      </div>

      {/* nav link  */}
      <div className='grid col-span-8 items-center justify-end mr-[100px]'>
        <ul className='text-[#FFFFFF] flex gap-[34px]'>
        <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/products"> Products</Link>
          </li>

          <li>
            <Link to="/order-review">Order Review</Link>
          </li>

          <li>
            <Link to="/inventory">Manage Inventory</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
    
  </div>
)

export default Navbar
