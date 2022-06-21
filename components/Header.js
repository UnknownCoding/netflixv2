import React, { useEffect, useState } from 'react'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
const Header = () => {

    const [isScrolled,setIsScrolled] = useState(false)
    // empty array dependency ensures that only run only if any compiennt or header compoent is ran not running every time for no reason  
    // always use add event listeners for external things 
    // as well as window object which again doesn work on node only on javascript 

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY>0){
                setIsScrolled(true)
                console.log('works')
            }else{
                setIsScrolled(false)
                console.log('hmmmm kindda')

            }
        }
        window.addEventListener("scroll",handleScroll)
        console.log('addin the listener ')
        return ()=>{
            window.removeEventListener("scroll",handleScroll)
            console.log('removin')

        }

    },[])
    
    return (
        <header className={`${isScrolled && 'bg-black'}`}>
            <div className='flex items-center space-x-2 md:space-x-10'>
                <img src="https://rb.gy/ulxxee" width="100" height="100" className="cursor-pointer object-contain"/>
                <ul className='hidden md:space-x-4 md:inline-flex'>
                    <li className='headerLink'>Home</li>
                    <li className='headerLink'>TV Shows</li>
                    <li className='headerLink'>Movies</li>
                    <li className='headerLink'>New And Popular</li>
                    <li className='headerLink'>My List</li>
                </ul>
            </div>

            <div className='flex items-center space-x-4 text-sm font-light'>
                <SearchIcon className='hidden sm:inline-flex text-white sm:h-6 w-6'/>
                <p className='hidden lg:inline-flex text-white'>Kids</p>
                <BellIcon className='text-white h-6 w-6'/>
                <Link href='/account'>
                <img src="https://rb.gy/g1pwyx" alt="" className="cursor-pointer rounded"/>
                </Link>
            </div>

        </header>
    )
}

export default Header

// use header, main and other html tags because it boosts the seo instead of divs 