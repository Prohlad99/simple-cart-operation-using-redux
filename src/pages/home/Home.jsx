import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/home/Navbar';

const Home = () => {
  return (
    <div>
      {/* container  */}
      <div>
        <Navbar/>
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default Home
