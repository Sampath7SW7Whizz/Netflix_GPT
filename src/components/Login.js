import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidation } from '../utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

import {updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import {USER_AVATAR} from '../utils/constants';

const Login = () => {

    const[isSignInForm,setIsSignInForm]=useState(true);
    const[errorMessage,setErrorMessage]=useState(null);
    
    const dispatch=useDispatch();

    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const handleButtonClick=()=>{
         
        const message=checkValidation(email.current.value,password.current.value);
        setErrorMessage(message);
        


        if(message) return;

        //sign in /sign up logic
        if(!isSignInForm){
            //sign up logic
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name.current.value, photoURL:USER_AVATAR
            }).then(() => {
                const {uid,email,displayName,photoURL}=auth.currentUser;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                
                // ...
              }).catch((error) => {
                // An error occurred
                setErrorMessage(error.message)
                // ...
              });
            
            // ...
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+"-"+errorMessage);
             // ..
            });
        }else{
            //sign in logic
            signInWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
           // Signed in 
           const user = userCredential.user;
          
           // ...
           })
          .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           setErrorMessage(errorCode+"-"+errorMessage);
           
         });
        }
        
    }

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img alt="Background" src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()}  className='w-3/12 absolute bg-black p-12 my-36 mx-auto left-0 right-0 rounded-lg bg-opacity-80  text-white'>
            <h1 className='font-bold text-3xl py-4'>
                {isSignInForm?"Sign In":"Sign Up"}
            </h1>  
            {!isSignInForm&&<input  ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}

            <input  ref={email} type="email" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
            
            
            <input  ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full  bg-gray-700'/>
             
            <p className='text-red-500 font-bold py-3 text-lg'>{errorMessage}</p>

            <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
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