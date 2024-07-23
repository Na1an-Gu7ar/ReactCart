import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='h-28 border-2 border-solid flex flex-row items-center justify-between'>
            <div className='p-5 text-3xl'>
                <Link to={"/"}>ShopingCart</Link>
            </div>
            <div className='p-5 flex flex-row gap-5'>
                <Link to={"/"}>Home</Link>
                <Link to={"/cart"}>Cart</Link>
            </div>
        </div>
    )
}

export default Navbar
