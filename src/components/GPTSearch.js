import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggesstions from './GptMovieSuggesstions';
import { BG_URL } from '../utils/constants';

const GPTSearch = () => {
  return (
    <>
    <div className='fixed -z-10'>
        <img className="h-screen object-cover lg:h-auto" alt="Background" src={BG_URL}/>
        </div>
    <div className="">
        <GptSearchBar/>
        <GptMovieSuggesstions/>
    </div>
    </>
  )
}

export default GPTSearch;