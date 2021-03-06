import Image from 'next/image'
import React, { useState } from 'react'
import Head from 'next/head'
import { useForm } from "react-hook-form";
import useAuth from '../hooks/useAuth';

const login = () => {
    const [login,setLogin] = useState(false)
    const { register, handleSubmit,formState: { errors } } = useForm();
    const {signIn,signUp} = useAuth()
    
    const onSubmit = async ({email,password}) => {
        if(login){
            await signIn(email,password)
        }else{
            await signUp(email,password)
        }
    };  

    return (
        <div className='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
            <Head>
                <title>Netflix Login</title>
            </Head>
            {/* object contain to maintain the ratio of the specific image and always use semantic labels for seo boost as said before*/}
            <Image src='https://rb.gy/p2hphi' layout='fill' objectFit='cover' className='-z-10 !hidden opacity-60 sm:!inline-flex'/>
            <img src="https://rb.gy/ulxxee" className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6" width={150} height={150}/>

            <form onSubmit={handleSubmit(onSubmit)} className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14 '>
                <h1 className='text-white text-4xl font-semibold'>Sign In </h1>
                <div className='space-y-4'>
                    
                    <label className='inline-block w-full'>
                        <input type="email" placeholder='Email' className='input' {...register("email",{required:true})} />
                        {errors.email && <p className='p-1 text-[13px] font-light text-orange-500'>please enter a valid email</p>}
                    </label>
                    
                    <label className='inline-block w-full'>
                        <input type="password" placeholder='Password' className='input'  {...register("password",{required:true})}/>
                        {errors.password && <p className='p-1 text-[13px] font-light text-orange-500' >please enter a valid password</p>}
                    </label>
                    
                    <button type="submit" className='text-white w-full rounded bg-[#e50914] py-3 font-semibold' onClick={()=> setLogin(true)}>Sign In</button>
                    
                    <div className='text-white pt-4'>
                        New To Netflix ?
                        <button type="submit" className='text-white hover:underline ml-3' onClick={()=>setLogin(false)}>  Sign Up Now </button>
                    </div>
                
                </div>
            </form>
        </div>
    )
}

export default login