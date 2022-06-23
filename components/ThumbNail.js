import React from 'react'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtoms'

const ThumbNail = ({movie}) => {
    const [showModal,setShowModal] = useRecoilState(modalState)
    const [currentMovie,setCurrentMovie] = useRecoilState(movieState)

    return (
        <div onClick={()=>{setShowModal(true); setCurrentMovie(movie)}} className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:min-w-[260px] md:hover:scale-105' >
            <Image src={`https://image.tmdb.org/t/p/w500${movie?.backdrop?.path || movie?.poster_path}`} className='rounded-sm object-cover md:rounded' layout='fill'/>
        </div>
    )
}

export default ThumbNail