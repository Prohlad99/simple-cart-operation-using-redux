import React from 'react'
import { Link } from 'react-router-dom'
import man from '../../assets/images/person.png'

const Main = () => {
  return (
    <div className='grid grid-cols-12 mt-[155px]'>
        {/* content */}
      <div className='grid col-span-7 mx-[50px]'>
        <div className='mt-[60px]'>
        <p className='text-[#FF9900] text-[20px]'>Sale up to 70% off</p>
        <div className='my-[30px]' >
            <h1 className='text-[#1C2B35] font-bold text-[50px]'>New Collection For Fall</h1>
            <p className='text-[25px]'>Discover all the new arrivals of ready-to-wear collection.</p>
        </div>
        <Link to="/products"><button className='bg-[#FF9900] font-semibold text-xl rounded-md w-[203px] h-[56px]'>SHOPE NOW</button></Link>
        </div>
      </div>

      {/* image  */}
      <div className='grid col-span-5'>
        <div className='ml-[70px]'>
            <img className='h-[380px] w-[300px] rotate-[8deg]' src={man} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Main
