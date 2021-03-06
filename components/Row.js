import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React, { useRef, useState } from 'react'
import ThumbNail from './ThumbNail'

const Row = ({title,movies}) => {
    const rowRef= useRef(null)
    const [ismoved,setIsMoved] = useState(false)
    const handleClick = (direction)=>{
        setIsMoved(true)
        if(rowRef.current){
            const {scrollLeft,clientWidth} = rowRef.current
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
            rowRef.current.scrollTo({left:scrollTo, behavior: 'smooth'})
            
        }
    }
    return (
        <div className='h-40 space-y-0.5 md:sapce-y-2'>
            <h2 className='text-[#e5e5e5] w-56 cursor-pointer text-sm font-semibold trasnsition duration-200 hover:text-white md:text-2xl '>{title}</h2>
            <div className='group relative md:-ml-2'>
                <ChevronLeftIcon onClick={()=>handleClick('left')} className={`text-white absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!ismoved && 'hidden'}`}/>
                
                <div ref={rowRef} className='flex scrollbar-hide items-center overflow-x-scroll space-x-0.5 md:space-x-2.5 md:p-2 '>
                    {movies.map((movie)=>(
                        <ThumbNail key={movie.id} movie={movie} />
                    ))}
                </div>

                <ChevronRightIcon onClick={()=>handleClick('right')} className={` text-white absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}/>
            </div>
        </div>
    )
}

export default Row