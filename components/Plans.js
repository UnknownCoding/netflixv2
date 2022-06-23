import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { auth } from '../firebase'
import useAuth from '../hooks/useAuth'
import { CheckIcon } from '@heroicons/react/outline'

const Plans = () => {
    const {logout} = useAuth()

    return (
        <div className='text-white'>
            <Head>
                <title>Netflix</title>
            </Head>
            <header className='border-b border-white/10 bg-[#141414]'>
                <Link href='/'>
                    <img src="https://rb.gy/ulxxee" width="150" height="90" className="cursor-pointer object-contain"/>
                </Link>
                <button onClick={logout} className='text-lg text-red-500 font-medium hover:underline'>Sign Out</button>
            </header>
            <main className='pt-28 max-w-5xl px-5 pb-12 transition-all md:px-10'>
                <h1 className='text-red-500 text-3xl font-medium'>Choose the most suitable plan for you   </h1>
                <ul>
                    <li className="flex items-center gap-x-2 text-lg">
                        <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
                        Ad-free.
                    </li>
                    <li className="flex items-center gap-x-2 text-lg">
                        <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
                        just for you.
                    </li>
                    <li className="flex items-center gap-x-2 text-lg">
                        <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
                        your plan anytime.
                    </li>
                </ul>
                <div className='flex flex-col mt-3 sapce-x-4'>
                    <div className='flex w-full items-center justify-end self-end md:w-3/5'>
                        <div className='planBox text-white'> Standard</div>
                        <div className='planBox text-white'> Standard</div>
                        <div className='planBox text-white'> Standard</div>
                    </div>
                    {/* <Table/> */}
                    {/* <button className='text-white'>Subscribe</button> */}
                </div>
            </main>
        </div>
    )
}

export default Plans