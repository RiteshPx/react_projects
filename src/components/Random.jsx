import React, { useEffect } from 'react'
import { Spinner } from './Spinner';
import { useMeme } from './Hooks/useMeme';


const Random = () => {

    const {fetchData,loading,gif} =useMeme();
   
    return (
        <div className='flex flex-col bg-gray-500 p-7 w-1/2 items-center m-3 p-4 rounded-lg shadow-lg'>
            <h4 className='text-white text-xl font-bold mb-4'>Random GIF</h4>

            {loading? 
            (<Spinner />) 
            :
                (<img src={gif} className="mt-3 w-72 h-72 object-cover rounded-lg shadow-md" />)
            }
            <button className='rounded-2xl bg-orange-500 mt-8 p-3 my-2 text-white font-semibold hover:bg-orange-600 transition duration-300' onClick={()=>fetchData()}>
                Generate GIF
            </button>
        </div>
    )
}

export default Random