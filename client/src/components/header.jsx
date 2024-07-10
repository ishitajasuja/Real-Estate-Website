import React from 'react'
import {FaSearch} from 'react-icons/fa'

import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-blue-100 shadow-md'>

        <div className="flex justify-between items-center max-w-6xl mx-auto p-3" > 
             <h1 className='font-bold text-lg sm:text-xl flex flex-wrap'><span className='text-blue-400'>Jasuja</span>
        <span className='text-blue-500'>Estate</span></h1>

        <form className='rounded-md p-2 flex items-center bg-blue-50  '>
            <input type='text' placeholder='Search....' className='bg-transparent focus:outline-none w-24 sm:w-64'></input>
            <FaSearch className='text-blue-600'></FaSearch>
        </form>
<div >
    <ul className='flex gap-4'>
        <Link to='/'>
        <li className='hidden sm:inline hover:underline text-blue-600'>Home</li>
        </Link>
          <Link to='/about'>
        <li className='hidden sm:inline hover:underline text-blue-600'>About</li>
        </Link>
         <Link to='/sign-in'>
        <li className='hidden sm:inline hover:underline text-blue-600'>SignIn</li>
        </Link>

    </ul>
    </div>
        </div>
      
        </header> 
  )
}
