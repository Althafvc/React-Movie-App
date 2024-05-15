import React, { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMovieContext } from '../Context/Moviecontext'
import BasicAlerts from '../components/Alerts'


function EditMovie() {

  const [message, setMessage] = useState('')
  const [success, setsuccess] = useState(false)
  const location = useLocation()
  const Navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('id');
  const { newmovies, setNewMovie } = useMovieContext() // data from the usecontext

  const aptData =  newmovies.find((movie) => movie.id == id)
  const [newmovie, setNewmovies] = useState(aptData)


  function changePreview(e) {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = () => setNewmovies({ ...newmovie, image: reader.result });

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNewmovies({...newmovie, [name]: value});
  }

  function handleSubmit(e) {
    e.preventDefault();

    //checking that all the input fields are filled properly
    if (newmovie.moviename.trim() === '' || newmovie.hero.trim() === '' || newmovie.language.trim() === '' || newmovie.about.trim() === '') {
      setMessage('All fields are mandatory');
      //ensuring that image is selected correctly
    } else if (!newmovie.image) {
      setMessage('Please provide the appropriate movie image');

      //handling the correct case
    } else {
      const id = Date.now();

      const obj = {
        id,
        image: newmovie.image,
        moviename: newmovie.name,
        language: newmovie.language,
        hero: newmovie.hero,
        about: newmovie.about
      };
      
      setNewMovie(newmovies.map((movie) => {
        if (movie.id === newmovie.id) {
          return newmovie
        } else {
          return movie
        }
      }))

      setsuccess(true);
      setMessage('Movie added successfully');
      setTimeout(() => Navigate('/admin/home/movies'), 800)
    }


  }


  return (
    <>
      <div className="container bg-white">
        <form onSubmit={handleSubmit} className="signup-form w-[500px] border border-red-300">
          <div className=''>

            <div className='w-[150px] h-[150px] border border-black ml-[105px]'>

              {newmovie && newmovie.image ?
                <img src={newmovie.image} alt="Preview" className='w-full h-full' /> :
                <img src={''} alt="Preview" className='w-full h-full' />
              }

            </div>
            <div className="img-area w-full h-auto flex justify-center mt-2">
              <div className='w-[120px] h-[30px] relative border border-black flex items-center justify-center'> Choose File
                <input type='file' name='movieimg' className='border border-black w-[100%] h-[100%] absolute left-[0] opacity-0' onChange={changePreview} />
              </div>
            </div>
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              id="firstName"
              name="moviename"
              value={newmovie.moviename}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="trailer">Hero : </label>
            <input
              type="text"
              id="lastName"
              name="hero"
              value={newmovie.hero}
              onChange={handleChange}
            />

            <label htmlFor="trailer"> Language : </label>
            <input
              type="text"
              id="lastName"
              name="language"
              value={newmovie.language}
              onChange={handleChange}
            />
            <label htmlFor="trailer">About : </label>
            <input
              type="text"
              id="lastName"
              name="about"
              value={newmovie.about}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Add</button>
          {message && <BasicAlerts type={success ? "success" : "error"} msg={message} />}
        </form>
      </div>
    </>
  )

}

export default EditMovie