import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import logo from '../assets/movieImages/logo.png'

function AdminNavbar({ setAdmin }) {
    const Navigate = useNavigate()
    const dispatch = useDispatch()

    function logoutClicked() {
        dispatch({ type: 'AdminLoggedout' })
        Navigate('/admin/logout')
    }


    return (
        <div className="navbar w-full px-10 h-20 bg-slate-600 flex justify-between items-center pr-10 gap-10">
            <img src={logo} className='w-[100px] h-full' alt="" />
            <div className='flex gap-10'>

                <button className=" navbutton w-auto h-auto bg-red-300 border rounded-sm p-2 px-7 font-bold text-slate-800" onClick={logoutClicked}>Logout</button>
                <AccountCircleIcon sx={{ fontSize: '2.5rem' }} style={{ color: 'lightgray', cursor: 'pointer' }} />
            </div>
        </div>
    )
}

export default AdminNavbar