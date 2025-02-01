import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Spinner } from './Spinner';
import { useMeme } from './Hooks/useMeme';
const Tag = () => {  

  const [search,setSearch]= useState("car")
  const {fetchData,loading,gif}=useMeme(search);
 

    return (
        <div className='flex flex-col bg-blue-500 w-1/2 items-center m-3 p-4 rounded-lg shadow-lg'>
          {  <h4 className='text-white text-xl font-bold mb-4'>Random GIF of {search}</h4> }

            {loading? 
            (<Spinner />) 
            :
                (<img src={gif} className="mt-3 w-72 h-72 object-cover rounded-lg shadow-md" />)
            }
            <input type ='text' 
            className='w-1/3 bg-slate-300 p-2 m-3 text-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
            value ={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
            <button className='rounded-2xl bg-orange-500 p-3 my-2 text-white font-semibold hover:bg-orange-600 transition duration-300' onClick={()=>fetchData()}>
                Generate GIF
            </button>
        </div>
    )
}

export default Tag