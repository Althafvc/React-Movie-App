import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/movieImages/logo.png'
import { useDispatch } from 'react-redux';

function Navbar({ setUser }) {
    const [searchTerm, setSearchTerm] = useState('')
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    useEffect(() => {

        const id = setTimeout(() => {
            if (searchTerm) {
                Navigate(`/home/searchedmovie?${new URLSearchParams({ data: searchTerm }).toString()}`)
            }
        }, 700)

        return () => {
            clearTimeout(id)
        }
    }, [searchTerm])

    function handleSearchChange(e) {
        setSearchTerm(e.target.value)

    }

    function logoutClicked() {

        dispatch({ type: 'userLoggedOut' })
        Navigate('/login')
    }

    return (
        <div className="navbar px-10 w-[100%] h-20 bg-slate-600 flex justify-between items-center pr-10 gap-10">
            <img src={Logo} className='w-[100px] h-full'></img>
            <div className="searchbar flex gap-2">
                <input type="text" name="" id="" className='searchinp w-[520px] pl-5 text-md font-semibold rounded-sm h-10' onChange={handleSearchChange} />
            </div>
            <div className='flex items-center gap-4'>

                <button className=" navbutton w-auto h-auto bg-red-300 border rounded-sm p-2 px-7 font-bold text-slate-800" onClick={logoutClicked}>Logout</button>
                <AccountCircleIcon sx={{ fontSize: '2.5rem' }} style={{ color: 'lightgray', cursor: 'pointer' }} />
            </div>


        </div>
    )
}

export default Navbar