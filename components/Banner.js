import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movies'
import {FaPlay} from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/solid'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtoms'

const Banner = ({netflixOriginals}) => {
    const [showModal,setShowModal] = useRecoilState(modalState)
    const [movie,setMovie]= useState(null)
    const [currentMovie,setCurrentMovie] = useRecoilState(movieState)



    useEffect(()=>{
        setMovie(netflixOriginals[Math.floor(Math.random()*netflixOriginals.length)])
    },[netflixOriginals])

    console.log(movie)
    return (
        // remmeber in different types of layouts sometimes absolute is needed 
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[85vh] lg:justify-end'>
            <div className='absolute top-0 left-0 -z-10 h-[110vh] w-screen'>
                <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} layout="fill" objectFit='cover'/>
            </div>
            <h1 className='text-white text-2xl lg:text-7xl md:text-4xl'>{movie?.title }</h1>
            <p className='text-white max-w-xs md:max-w-lg md:text-lg lg:max-w-2xl text-shadow-md'>{movie?.overview}</p>

            <div className='flex space-x-3'>
                <button className='bannerbtn bg-white text-black outline-none' >
                    <FaPlay className='w-4 h-4 text-black md:h-7 md:w-7'/> Play
                </button>
                <button onClick={()=>{setShowModal(true); setCurrentMovie(movie)}} className='bannerbtn bg-[gray]/70 outline-none'> More Info <InformationCircleIcon className='h-5 w-5 md:h-8 md:w-8'/> </button>
            </div>
        </div>
    )
}

export default Banner