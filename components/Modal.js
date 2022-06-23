import React, { useEffect, useState } from 'react'
import MuiModal from '@mui/material/Modal'
import { useRecoilState, useRecoilValue } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtoms'
import { PlusIcon, ThumbUpIcon, VolumeOffIcon, VolumeUpIcon, XIcon } from '@heroicons/react/solid'
import ReactPlayer from 'react-player'
import { FaPlay, FaVolumeDown } from 'react-icons/fa'


const Modal = () => {
    const [showModal,setShowModal] = useRecoilState(modalState)
    const [currentMovie,setCurrentMovie] = useRecoilState(movieState)
    const [trailer , setTrailer ] = useState("")
    const [genres , setGenres ] = useState([])
    const [muted , setMuted ] = useState(true)

    useEffect(()=>{
        if (!currentMovie) return
        async function fetchMovie (){
            const data = await fetch(`https://api.themoviedb.org/3/${currentMovie?.media_type === 'tv' ? 'tv' : 'movie'}/${currentMovie?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=videos`)
            .then((res)=>res.json()).catch((err)=> console.log(err))
            if (data?.videos){
                const index = data?.videos?.results?.findIndex((element)=>
                    element.type === 'Trailer'
                )                
                setTrailer(data?.videos?.results[index]?.key)
            }
            if(data?.genres){
                setGenres(data?.genres)
            }
        }
        fetchMovie()
    },[currentMovie])

    const handleClose = ()=>{
        setShowModal(false)
    }

    return (
        <MuiModal open={showModal} onClose={handleClose} className="fixed !top-7 right-0 left-0 z-50 mx-auto w-full max-w-2xl overflow-hidden overflow-y-scroll scrollbar-hide">
            <>
                <button onClick={handleClose} className="modalButton absolute hover:bg-[#181818] right-5 text-white  top-5 !z-50 w-9 h-9 border-none bg-[#181818]">
                    <XIcon className='h-6 w-6 '/>
                </button>
                <div className='relative pt-[56.25%]'>
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${trailer}`}
                        width="100%"
                        height="100%"
                        style={{ position: 'absolute', top: '0', left: '0' }}
                        playing
                        muted={muted}
                    />
                    <div className='absolute -bottom-17 flex w-full items-center justify-between px-10'>
                        <div className='flex space-x-2 py-2'>
                                <button className='flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold py-2 outline-none transition hover:bg-[#e6e6e6]'>
                                    <FaPlay className='w-7 h-7 text-black'/> play
                                </button>

                                <button className='modalButton text-white outline-none'>
                                    <PlusIcon className='h-7 w-7'/>
                                </button>

                                <button className='modalButton text-white outline-none'>
                                    <ThumbUpIcon className='h-7 w-7'/>
                                </button>
                        </div>
                        <button onClick={()=>setMuted(!muted)} className='modalButton text-white'>
                            {muted ? (<VolumeUpIcon className='h-6 w-6'/>) : (<VolumeOffIcon className='h-6 w-6' />)}
                        </button>
                    </div>
                </div>
                <div className='space-y-6 text-lg  space-x-10 rounded-b-md bg-[#181818] px-10 py-8'>
                    <div >
                        <div className='mt-20 flex items-center space-x-2 text-sm'>
                            <p className=' font-semibold text-green-400'>{currentMovie.vote_average * 10}% Match</p>
                            <p className='text-white font-light '>{currentMovie?.release_date || currentMovie?.first_air_date}</p>
                            <div className=' text-white flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs'>HD</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-x-10 gap-y-4 font-light md:flex-row'>
                        <p className='w-5/6 text-white'>{currentMovie?.overview}</p>
                        <div className='flex flex-col space-y-3 text-sm'>
                            <div className='text-white'>
                                <span className='!text-[gray] pr-2'>Genres:</span>
                                {genres.map((genres)=>genres?.name).join(',')}
                            </div>
                            <div className='text-[white]'>
                                <span className='!text-[gray] pr-2'>Original Language:</span>
                                {currentMovie?.original_language}
                            </div>
                            <div className='text-[white]'>
                                <span className='!text-[gray] pr-2'>Total Votes:</span>
                                {currentMovie?.vote_count}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </MuiModal>
    )
}

export default Modal