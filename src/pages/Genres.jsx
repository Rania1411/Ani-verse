import React from 'react'
import Search from "../components/Search.jsx";
import Header from '../components/Header.jsx';  
import Genresbar from '../components/GenresBar.jsx';
import{useState,useEffect} from'react'
const Genres = () => {
     const [searchTerm,setSearchTerm]=useState('');
  return (
  
         <div className=" wrapper
  flex
  min-h-screen
  w-full
  bg-[url('/bg2.png')]
  bg-center
  bg-cover
  bg-fixed
  bg-no-repeat
  flex-col
  justify-start
  items-center
  text-center">
<Header/>
< Genresbar/>
 </div>
  )
}

export default Genres

