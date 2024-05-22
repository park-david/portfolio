import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    };

    useEffect(() => {
        const closeNavWhenResize = () => {
            if (window.innerWidth >= 768) {
                setNav(false);
            }
        };

        window.addEventListener('resize', closeNavWhenResize);

        return () => {
            window.removeEventListener('resize', closeNavWhenResize)
        };
    }, []);

  return (
    <div className='z-10 text-white flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4'>

        <h1 className='text-3xl font-bold primary-color ml-4'>David Park</h1>
        <ul className='hidden md:flex'>
            <li className='p-5'>Home</li>
            <li className='p-5'>Projects</li>
            <li className='p-5'>Contact</li>
        </ul>

        <div onClick ={handleNav} className='block md:hidden'> {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}</div>    

        <div className={nav ? 'z-10 text-white fixed h-full left-0 top-0 w-[50%] border-r border-r-gray-900 bg-[#202121]  duration-500  ease-in-out'
            : 'z-10 fixed left-[-100%] top-0  h-full ease-in-out duration-500'}>
            <h1 className='text-3xl font-bold primary-color m-4'>David Park</h1>
            <ul className='p-8 text-2xl'>
                <li className='p-2'>Home</li>
                <li className='p-2'>Projects</li>
                <li className='p-2'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar