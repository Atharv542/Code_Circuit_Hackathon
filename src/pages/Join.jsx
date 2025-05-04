import React from 'react'
import { useNavigate } from 'react-router-dom'

function Join() {
    const navigate=useNavigate()
  return (
    <div className='flex flex-col items-center justify-center gap-8 -mt-20 mb-10'>
        <h1 className='text-gray-700 font-semibold text-4xl  '>Join Khan Academy today </h1>
        <div className='flex flex-col gap-2  '>
        <button onClick={()=>navigate('/go-back')}   className="px-32 py-4  cursor-pointer text-md font-bold bg-blue-600 text-white rounded hover:ring-2 hover:ring-blue-600 hover:ring-offset-2 transition">
            Learners
          </button>
          <button onClick={()=>navigate('/go-back')}  className="px-6 py-4 text-md font-bold cursor-pointer bg-blue-600 text-white rounded hover:ring-2 hover:ring-blue-600 hover:ring-offset-2 transition">
            Teachers
          </button>
          <button onClick={()=>navigate('/go-back')}  className="px-6 py-4 text-md font-bold cursor-pointer bg-blue-600 text-white rounded hover:ring-2 hover:ring-blue-600 hover:ring-offset-2 transition">
            Parents
          </button>
          <button onClick={()=>navigate('/go-back')}  className="px-6 py-4 text-md font-bold cursor-pointer bg-blue-600 text-white rounded hover:ring-2 hover:ring-blue-600 hover:ring-offset-2 transition">
            Give Today
          </button>
        </div>
    </div>
  )
}

export default Join