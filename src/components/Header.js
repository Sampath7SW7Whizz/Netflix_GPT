import React, { useEffect } from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector(store=>store.user);

  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)

   const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
   }
   
   useEffect(()=>{

    const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          
          const {uid,email,displayName,photoURL}= user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate("/browse");
          // ...
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
          // ...
        }
      });
      //unsubsribe when component unmounts
      return ()=>unsubscribe();

},[])
   
  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute w-screen px-2 py-8 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-36'
        alt="logo" 
        src={LOGO}/>
        {user &&(
        < div className='flex p-2'>
          {showGptSearch&&(
        <select className='p-2 m-2 bg-gray-900 text-white shadow-white rounded-lg'
        onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>
            {lang.name}
            </option>)}
        </select>
)}
          <button className='py-2 px-4 bg-purple-700 rounded-lg mx-4 my-2 text-white'
          onClick={handleGptSearchClick}>{showGptSearch?"HomePage":"GPT Search"}</button>
          <img className='w-12 h-12'
          alt="user-icon" src={user && user.photoURL}/>
          <button onClick={handleSignOut}
          className='font-bold text-white'>(Sign Out)</button>
        </div>
)}
    </div>
  )
}

export default Header;