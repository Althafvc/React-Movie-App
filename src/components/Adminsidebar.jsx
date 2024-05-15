import React from 'react'
import WindowIcon from '@mui/icons-material/Window';
import MovieIcon from '@mui/icons-material/MovieCreation';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

function Adminsidebar() {
const Navigate = useNavigate()
  return (
    <>

    <div className="container w-full h-screen bg-[#e9c874] ">

        <div className="btn-area flex h-full  justify-start mt-10 flex-col">
            <div className="Dashboard w-full h-[80px]  bg-[#a34343] flex justify-center items-center gap-3 border- border-b-2 border-black hover:cursor-pointer" onClick={(()=> Navigate('/admin/home'))}>  {<WindowIcon style={{color:'white'}}/> } <h1 className='font-bold text-white'>Dashboard</h1> </div>
            <div className="Dashboard w-full h-[80px]  bg-[#a34343] flex justify-center items-center gap-3 border-1 border-b-2 border-black hover:cursor-pointer" onClick={(()=>Navigate('/admin/home/addmovie'))}>  {<AddIcon style={{color:'white'}}/>} <h1 className='font-bold text-white'>Add movie</h1> </div>
            <div className="Dashboard w-full h-[80px]  bg-[#a34343] flex justify-center items-center gap-3 border-1 border-b-2 border-black hover:cursor-pointer" onClick={(()=> Navigate('/admin/home/movies'))}>  {<MovieIcon style={{color:'white'}}/>} <h1 className='font-bold text-white'>Movies</h1> </div>
            
           
        </div>



      
       
    </div>
    
    </>
  )
}

export default Adminsidebar