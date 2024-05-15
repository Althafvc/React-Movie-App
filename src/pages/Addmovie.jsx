import React, { createContext } from "react";
import { useMovieContext } from "../Context/Moviecontext";
import BasicAlerts from "../components/Alerts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addmovie() {

  const Navigate = useNavigate()

  const moovie = useMovieContext()
  const { newmovies, setNewMovie } = moovie


  const movieData = { name: '', hero: '', language: '', about: '' }
  const [message, setMessage] = useState('')
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [success, setsuccess] = useState(false)

  const [newmovie, setNewmovie] = useState(movieData)

  function changePreview(e) {
    const file = e.target.files[0];
  
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
   
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setNewmovie(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    //checking that all the input fields are filled properly
    if (newmovie.name.trim() === '' || newmovie.hero.trim() === '' || newmovie.language.trim() === '' || newmovie.about.trim() === '') {
      setMessage('All fields are mandatory');
    } else if (!image) {
      setMessage('Please provide the appropriate movie image');
    } else {
      const id = Date.now();

      const obj = {
        id,
        image: image,
        moviename: newmovie.name,
        language: newmovie.language,
        hero: newmovie.hero,
        about: newmovie.about 
      };
  
      setNewMovie(prevMovies => [...prevMovies, obj]);
      localStorage.setItem('Movies', JSON.stringify([...newmovies, obj])); // Store updated movies in localStorage
  
      setsuccess(true);
      setMessage('Movie added successfully');
      setTimeout(()=>Navigate('/admin/home/movies'),800)
    }
  }

  if (message) setTimeout(()=> setMessage(''),800)

  return (
    <>
      <div className="container bg-white">
        <form onSubmit={handleSubmit} className="signup-form w-[500px] border border-red-300">
          <div className=''>

            <div className='w-[150px] h-[150px] border border-black ml-[105px]'>
              {image && <img src={image} alt="Preview" className='w-full h-full' />}
            </div>
            <div className="img-area w-full h-auto flex justify-center mt-2">
              <div className='w-[120px] h-[30px] relative border border-black flex items-center justify-center'> Choose File
                <input type='file' name='movieimg' className='border border-black w-[100%] h-[100%] absolute left-[0] opacity-0' onChange={changePreview} value={newmovie.image} />
              </div>
            </div>
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              id="firstName"
              name="name"
              value={newmovie.name}
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

export default Addmovie