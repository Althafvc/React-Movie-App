import React from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom';
import {useMovieContext} from '../Context/Moviecontext'


function Viewmovie() {
const location = useLocation()
const searchParams = new URLSearchParams(location.search);
const id = searchParams.get('id');



const {newmovies} = useMovieContext()
const thismovie = newmovies.find((movie)=> id == movie.id )
  return (
    <div className='w-full h-full flex items-center justify-center flex-col'>
    <Navbar />
    <div className='w-3/4 h-3/4 shadow-2xl shadow-black mt-20 mb-20 flex flex-col sm:flex-row'>
        <div className='w-full sm:w-2/4 h-[35rem] flex items-center justify-center overflow-hidden'> <img className='w-full' h-full src={thismovie.image} alt="" /> </div>
        <div className='w-7/8 sm:w-2/4 h-[35rem] pt-14 ml-5 overflow-auto scrollbar-hide'>
            <div className='text-4xl font-bold'>{thismovie.moviename}</div>
            <div className='text-xl font-semibold mt-8 mb-8'></div>
            <div className='text-xl font-semibold pr-5'>About: 
                <p className='font-thin text-[1rem]'> {thismovie.about}</p>
            </div>
            <div className='mt-8 mb-8'>
                <p className='font-semibold text-xl'>Hero : {thismovie.hero}</p> 
            </div>
            <div className='mt-8 mb-8'>
                <p className='font-semibold text-xl'>Language : {thismovie.language} </p> </div>
        </div>
    </div>
    {/* <div className={`w-5/6 h-[13rem] p-10 mb-10 flex flex-col justify-center items-center bg-slate-400 `}>
        <p className='font-semibold text-2xl'>Rate this Movie </p>
        <div className='mt-5 flex'>
            
        </div>
       
        
    </div>

    <button className='w-28 h-8  rounded-lg border-2 border-black mt-4' >Submit</button> */}
</div>
  )
}

export default Viewmovie