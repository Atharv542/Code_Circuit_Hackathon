import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

function Navbar({ scrollToWhatsNew }) {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/')
  }
  return (
    <nav className="bg-white shadow-md  py-2 flex items-center justify-between px-40">
      {/* Left: Search + Explore */}
      <div className="flex items-center gap-12">
      <button onClick={()=>navigate('/go-back')}  className="text-lg text-blue-600  font-bold">
          Explore
        </button>
        <div className="relative w-52">
      <input
        type="text"
        placeholder="Search"
        className="border w-full border-gray-500 rounded-sm pl-10 pr-2 py-1.5 text-md font-bold placeholder-blue-600 placeholder-text-xl focus:outline-none hover:border-2 hover:border-blue-600 focus:ring-blue-500"
      />
      <CiSearch className="absolute left-2 top-2  transform  text-blue-600 text-2xl pointer-events-none" />
    </div>
    
      </div>

      {/* Center: Site Name */}
      <div onClick={handleClick} className="text-2xl font-bold text-[#12316B]  hover:text-blue-600 cursor-pointer flex items-center tracking-wide">
        <img src='LogoH.jpg' className='w-9 h-9'/>
        Khan Academy
      </div>

      {/* Right: Login, Sign Up, Donate */}
      <div className="flex items-center gap-8">
      <button onClick={scrollToWhatsNew} className=" text-md  cursor-pointer font-semibold text-blue-600">
          <span className='hover:underline'>Memmory Boost</span> <span className='text-xl'>✨</span>
        </button>
      <button onClick={()=>navigate('/go-back')}  className=" text-md hover:underline cursor-pointer font-semibold text-blue-600">
          Donate
        </button>
        <button onClick={()=>navigate('/go-back')}  className="text-md hover:underline cursor-pointer text-blue-600 font-medium">
          Log in
        </button>
        <button onClick={()=>navigate('/go-back')} className="text-md px-4 py-2 hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 transition rounded-sm bg-blue-500 cursor-pointer text-white font-medium">
          Sign up
        </button>
        
      </div>
    </nav>
  )
}

export default Navbar