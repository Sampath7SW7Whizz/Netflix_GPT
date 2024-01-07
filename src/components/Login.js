import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

    const[isSignInForm,setIsSignInForm]=useState(true);

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img alt="Background" src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
        </div>
        <form className='w-3/12 absolute bg-black p-12 my-36 mx-auto left-0 right-0 rounded-lg bg-opacity-80  text-white'>
            <h1 className='font-bold text-3xl py-4'>
                {isSignInForm?"Sign In":"Sign Up"}
            </h1>  
            {!isSignInForm&&<input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
            <input type="email" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
            
            
            <input type="password" placeholder='Password' className='p-4 my-4 w-full  bg-gray-700'/>
            <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>
            {isSignInForm?"Sign In":"Sign Up"}
            </button>
            <p className='py-2 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm?"New to Netflix? Sign Up":"Already registerd? Sign In Now"}
            </p>
        </form>
    </div>
  )
}

export default Login;