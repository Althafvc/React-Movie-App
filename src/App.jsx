import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminLogin from './pages/AdminLogin';
import AdminSignup from './pages/AdminSignup';

const Home = React.lazy(()=> import('./pages/home'))
const AdminHome = React.lazy(()=> import('./pages/AdminHome'))
const Addmovie = React.lazy(()=> import ('./pages/Addmovie'))
const Viewmovie = React.lazy(()=> import ('./pages/Viewmovie'))
const MoviesList = React.lazy(()=> import ('./pages/MoviesList'))
const EditMovie = React.lazy(()=> import ('./pages/MoviesList'))
const SearchedProducts = React.lazy(()=> import ('./pages/SearchedProducts'))
const Navbar = React.lazy(()=> import ('./components/Navbar'))
const AdminNavbar = React.lazy(()=> import ('./components/AdminNavbar'))


const App = () => {

  const [admin, setAdmin] = useState([]);
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    return () => {
      dispatch({ type: 'retrieveUser' });
      dispatch({ type: 'retrieveAdmin' });
    };
  });

  return (
    <BrowserRouter>
    <Suspense
    fallback = {
      <div className=" h-full flex items-center justify-center mt-[20%] font-semibold text-lg">
            <img
              className="w-20 h-20 animate-spin mr-6"
              src="https://www.svgrepo.com/show/199956/loading-loader.svg"
              alt="Loading icon"
            />{" "}
            Loading
          </div>
    }>
      <Routes>
        <Route path='/home' element={<Home />} />
       
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/admin/login' element={<AdminLogin/>} />
          <Route path='/admin/signup' element={<AdminSignup />} />

        <Route path='/admin/home' element={<AdminHome user={user} />}>
          <Route path='addmovie' element={<Addmovie />} />
          <Route path='movies' element={<MoviesList />} />
        </Route>

        <Route path='/view' element={<Viewmovie />} />
        <Route path='/movies/edit' element={<EditMovie />} />
        <Route path='/home/searchedmovie' element={<SearchedProducts />} />
        <Route path='/admin/logout' element={<AdminLogin />} />
        <Route path='/logout' element={<Login />} />
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/admin/navbar' element={<AdminNavbar />} />
        <Route path='/' element={<Login />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
