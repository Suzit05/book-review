import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-full p-1 bg-zinc-300 '>

            <ul className='flex justify-center gap-4 bg-zinc-500 h-full text-xl '>

                <Link to="/"><li>Home</li></Link>
                <Link to="/Profile"><li>Profile</li></Link>
                <Link to="/Booklist"><li>Book list</li></Link>
                <Link to="/Admin"><li>Admin</li></Link>
            </ul>
        </div>
    )
}

export default Navbar