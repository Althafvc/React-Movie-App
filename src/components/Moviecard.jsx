import React from 'react'
import aveshamImg from '../assets/movieImages/avesham.jpg'
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from "react-router-dom"; 

import {useMovieContext} from '../Context/Moviecontext'


function Moviecard(props) {

  const {newmovies} = useMovieContext()
  const Navigate = useNavigate()
  
  return (

    <div className='card  h-auto  flex  flex-col w-[300px] bg-[#1a1a1a]'>
        <div className="imgarea border h-[60%] w-[90%] mt-2 object-fill bg-no-repeat overflow-hidden rounded-md ml-3" >
        <img src= {props.image} style={{width:'100%', }} alt="image not found"/>
        </div>
        <div className="description pl-3 mt-5 flex flex-col gap-2">
            <h1 className='moviename font-extrabold text-lg text-[#e6e6e6]'>{props.name}</h1>

            <div className="rating"> <StarIcon style={{color:'yellow'}}/> <button className='text-[#aaaaaa]'>{props.rating}</button> </div>

            <button onClick={() => Navigate(`/view?${new URLSearchParams({ id: newmovies[0].id }).toString()}`)} className='trailer w-[80%] border border-slate-300 bg-[#2c2c2c] text-bold text-[#ffffff] mb-4'>View</button>
            
        </div>
    </div>
  )
}

export default Moviecard