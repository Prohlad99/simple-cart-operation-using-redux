import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div>
      {/* container  */}
      <div className=' mx-auto mt-4 shadow-lg rounded-md px-6 py-4 bg-indigo-300 w-[440px] grid justify-center'>
        <h2 className='text-center text-2xl mb-4'>Login</h2>
        <form action="">
            <div>
                <label htmlFor="email">Email</label><br />
                <input className='w-[300px] rounded-md py-2 mt-1 outline-none px-2' type="email" id='email' />
            </div>

            <div className='my-3'>
                <label htmlFor="password">Password</label><br />
                <input className='w-[300px] rounded-md py-2 mt-1 outline-none px-2' type="password" id='password'/>
            </div>

            <div>
                <input className='border-[1px] border-[#95A0A7] w-full my-4 py-2 bg-green-500 rounded-md font-bold' type="submit" value="Sign Up" />
            </div>
        </form>

        <div>
        <p className='text-center'>New to Ema-John? <Link to="/register"><button><span className='text-green-700'>Create New Account</span></button></Link> </p>
        <div className='flex justify-center items-center my-3'>
            <div className='w-[100px] h-[2px] bg-black mr-2'></div>
            Or
            <div className='w-[100px] h-[2px] bg-black ml-2'></div>
        </div>
        <button className='flex items-center gap-2 w-full bg-indigo-700 text-white justify-center py-2 rounded-md'><span className='text-2xl'><FcGoogle/></span>Continue With Google</button>
        </div>
      </div>
    </div>
  )
}

export default Login
