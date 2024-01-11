import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggesstions from './GptMovieSuggesstions';
import { BG_URL } from '../utils/constants';

const GPTSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
        <img alt="Background" src={BG_URL}/>
        </div>
        <GptSearchBar/>
        <GptMovieSuggesstions/>
    </div>
  )
}

export default GPTSearch;