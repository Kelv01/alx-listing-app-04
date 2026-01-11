import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center p-2'>
        <p className='text-2xl font-sans font-semibold'>Home Listing</p>
        <div>
            <input type="text" placeholder='search rooms'  className=' py-2 px-2 rounded-bl rounded-tl rounded-br-none rounded-tr-none border-2 border-indigo-300'  />
        <button className='py-2 px-2 bg-indigo-300 rounded-bl-none rounded-tl-none rounded-tr rounded-br text-gray-600'>search</button>
        </div>
        <div>
            <ul className='gap-4 flex decoration-0 text-lg'>
                <li><a href="#">Mansion</a></li>
                <li><a href="#">Rooms</a></li>
                <li><a href="#">Countryside</a></li>
                <li><a href="#">Sign In</a></li>
                <li><a href="#">Sign Up</a></li>
                
            </ul>
        </div>

    </header>
  )
}

export default Header