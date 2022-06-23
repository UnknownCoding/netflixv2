import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import useAuth from '../hooks/useAuth'
const Account = () => {
    const {logout} = useAuth()
    return (
        <div>
            <Head>
                <title>Account</title>
            </Head>
            <header className='bg-[#141414] flex'>
                <Link href='/'>
                    <img
                    src="https://rb.gy/ulxxee"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"
                    />
                </Link>
                <Link href="/account">
                    <img
                    src="https://rb.gy/g1pwyx"
                    alt=""
                    className="cursor-pointer rounded"
                    />
                </Link>

            </header>
            <main className='pt-24 mx-auto max-w-6xl px-5 pb-12 transition-all md:px-10'>
                <div className='flex flex-col gap-x-4 md:flex-row md:items-center'>
                    <h1 className='text-white text-3xl md:text-4xl'>Account</h1>
                    <div className=' flex -ml-0.5 items-center gap-x-1.5'>
                        <img src="https://rb.gy/4vfk4r" alt="" className="h-7 w-7" />
                        <p className='text-xs font-semibold text-[#555]'>Member since: </p>
                    </div>
                </div>
                
                {/* memberships */}
                <div className='text-white mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 
                                md:border-b-0 md:border-t md:px-0 md:pb-0'>
                    <h4>Plan Details</h4>
                    <div>
                        {/* stripe checkout thin */}
                        subscription type 
                    </div>
                    <p className='cursor-pointer text-blue-500 hover:underline md:text-right'>Change Plan</p>
                </div>
                <div className='text-white mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 
                                md:border-b-0 md:border-t md:px-0 md:pb-0'>
                        <h4>Settings</h4>
                        <p className="col-span-3 cursor-pointer text-blue-500 hover:underline" onClick={logout}>
                        Sign out of all devices
                        </p>                
                </div>
            </main>
        </div>
    )
}

export default Account