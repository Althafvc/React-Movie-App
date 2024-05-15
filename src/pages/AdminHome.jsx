import React, { useEffect, useState } from 'react'
import Adminsidebar from '../components/Adminsidebar'
import AdminNavbar from '../components/AdminNavbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function AdminHome() {
  
  const AdminLogged = useSelector(state => state.adminLogging)
  const [isLogged, setIsLogged] = useState(AdminLogged)
  const dispatch = useDispatch()
  const Navigate = useNavigate()

  useEffect(()=> {
    if(AdminLogged) {
      setIsLogged(true)

    }else {
      const AdminLogged = localStorage.getItem('AdminLogged')

      if(AdminLogged) {
        dispatch({type: 'AdminLogged'})
        setIsLogged(true)

      }else {
        setIsLogged(false)
        Navigate('/admin/login')
      }
    }
  })

  return (
    AdminLogged ?
    <>
      <div><AdminNavbar /></div>
      <div className='flex '>
        <div className='w-1/6'><Adminsidebar />  </div>
        <div className='w-full'> <Outlet /> </div>
      </div>
    </>
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

export default AdminHome