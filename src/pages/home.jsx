import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Moviecard from '../components/Moviecard';
import { useMovieContext } from '../Context/Moviecontext'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {
    const { newmovies } = useMovieContext()
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const userLogged = useSelector(state => state.userLogging)
    const [isLogged, setIsLogged] = useState(userLogged)

    useEffect(() => {

        if (userLogged) {
            setIsLogged(true)

        } else {

            const userLogged = localStorage.getItem('userLogged')
            if (userLogged) {
                dispatch({ type: 'userLogged' })
                setIsLogged(true)
                
            } else {
                setIsLogged(false)
                Navigate('/login')
            }
        }





    }, [])

    return (

        isLogged ?

            <div className="wrap w-full h-screen overflow-auto bg-[#000000]">
                <Navbar />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '20px' }} className='p-4 ml-10 mr-10 pt-10'>
                    {newmovies.map((movie) => <Moviecard key={movie.id} name={movie.moviename} id={movie.id} rating={4.5} image={movie.image} />)}
                </div>
            </div>
            :
            <div className=" h-full flex items-center justify-center mt-[20%] font-semibold text-lg">
            <img
              className="w-20 h-20 animate-spin mr-6"
              src="https://www.svgrepo.com/show/199956/loading-loader.svg"
              alt="Loading icon"
            />{" "}
            Loading
          </div>
    )
}

export default Home 