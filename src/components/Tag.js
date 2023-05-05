import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useGif from '../hooks/useGif';
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

    const [tag, setTag] = useState('')
    const {gif, loading, fetchData} = useGif(tag);

    function changeHandler(event){
        setTag(event.target.value);
        fetchData();
    }

  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black
                    flex flex-col mx-auto items-center gap-y-5 mt-[15px] mb-[20px]'>

        <h2 className='text-2xl underline uppercase font-bold mt-[20px]'>
            Search GIF {tag}
        </h2>

        {
            loading ? 
            ( <Spinner/>):
            (<img src={gif} width="450" hight="450"></img>)
        }

        <input className='w-10/12 text-lg py-2 rounded-lg text-center'
               onChange={changeHandler} value={tag}/>


        <button className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'
                onClick={() => fetchData(tag)}>
                GENERATE
        </button>

    </div>
  )
}

export default Tag