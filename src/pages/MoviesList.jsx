import React from 'react'

import { useMovieContext } from '../Context/Moviecontext'
import { useNavigate } from 'react-router-dom'

function MoviesList() {

    const {newmovies, setNewMovie} = useMovieContext() 
    const Navigate = useNavigate()

    function handleDelete(id) {
        const filtering = newmovies.filter((movie) => movie.id !== id) 
        setNewMovie(filtering) 
        localStorage.setItem('Movies', JSON.stringify(filtering))
    }

    function handleEdit (id) {
      Navigate(`/movies/edit?${new URLSearchParams({id:id}).toString()}`)
    }

    return (
        <div className='flex flex-row'>
            <table className='w-full h-full flex justify-center flex-col '>
                <thead>
                    <tr className='w-full h-14  flex flex-row items-center justify-center text-lg font-semibold gap-[15%]'>
                        <th>Movie Image</th>
                        <th>Movie Name</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {newmovies.map(movie => (
                        <tr key={movie.id} className='flex flex-row pb-5 pt-5 border-2 m-2 border-black'>
                            <td className='h-24 w-20 bg-slate-500 flex justify-center items-center ml-[17%]'>
                                <img className='w-20 h-full' src={movie.image} alt="" />
                            </td>
                            <td className='h-20 w-44 font-semibold flex items-center ml-[17%]'>
                                {movie.moviename}
                            </td>
                            <td className=' w-32 flex justify-center items-center ml-[6%]'>
                                <button className='h-7 w-16 border border-black rounded-md' onClick={() => handleEdit(movie.id)}>Edit</button>
                            </td>
                            <td className='flex justify-center items-center ml-[11%]'>
                                <button className='h-7 w-16 border border-black rounded-md' onClick={() => handleDelete(movie.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MoviesList
