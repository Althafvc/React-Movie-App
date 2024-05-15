import React, { createContext, useContext, useEffect, useState } from "react";

const NewMovieContext = createContext();

const NewMovieProvider = ({ children }) => {
    const [newmovies, setNewMovie] = useState(()=> {
       const storedMovies =  localStorage.getItem('Movies')
        return storedMovies ?  JSON.parse(storedMovies) : []
        
    });

    useEffect(() => {
            localStorage.setItem('Movies', JSON.stringify(newmovies)); 
    }, [newmovies]);

    const contextValue = {
        newmovies,
        setNewMovie,
    };

    return (
        <NewMovieContext.Provider value={contextValue}>
            {children}
        </NewMovieContext.Provider>
    );

   
};
export default NewMovieProvider


export const useMovieContext = () => {
    return useContext(NewMovieContext)
}

