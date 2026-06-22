import React from 'react'
import Search from "../components/Search.jsx";
import Header from "../components/Header.jsx";
import { useState, useEffect } from "react";
import Spinner  from"../components/Spinner.jsx"
import AnimeCard from"../components/AnimeCard.jsx"
const BASE_URL = "https://api.jikan.moe/v4";
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};
const Trending = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [animeList,setAnimeList]=useState([]);
  const[isLoading,setLoading]=useState(false);
  async function fetchAnime() {
    setErrorMessage('')
    setLoading(true)
    try {
   
      const endpoint = `${BASE_URL}/top/anime`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error(" failed to fetch anime");
      }
      const data = await response.json();
     if (!data.data || data.data.length === 0) {
     console.log("No anime found");
     setAnimeList([]);
     return;
  
     }
       setAnimeList(data.data||[])
    } catch (error) {
     console.log(`Error finding anime: ${error}`);
     setErrorMessage(error.message);
    }finally{
      setLoading(false);
    }
  }
  const filteredAnime=animeList.filter((anime)=>anime.title.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
  fetchAnime();
}, []);
  return (
    <>
      <Header />
      <main >
        <div className="pattern" />
        <div className="wrapper flex min-h-screen w-full bg-[url('/background.jpg')]  bg-[#030014]  bg-no-repeat  flex-col justify-start items-center  text-center  bg-cover bg-center">
          <header>
            <img src="/hero.png" alt="hero" className="w-150" />
            <h1 className="text-white font-bold text-2xl ">
              {" "}
              Find{" "}
              <span className="bg-gradient-to-r from-pink-200 to-purple-500 bg-clip-text text-transparent text-3xl font-bold">
                Anime
              </span>{" "}
              You'll Enjoy Without the Hassle
            </h1>
            <h1 className="text-white font-bold text-2xl ">
              Your Gateway to Amazing Anime
            </h1>
          </header>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
         <section className="allAnimes">
           <h2 className="mt-5 font-bold text-3xl bg-gradient-to-r from-pink-200 to-purple-500 bg-clip-text text-transparent">Top Anime</h2>

          {isLoading ? (
     <Spinner/>
        ) : errorMessage ? (
      <p className="text-red-500">{errorMessage}</p>
        ) : (
   <ul className=" flex flex-wrap justify-center gap-6 mt-8">
   
    {filteredAnime.map((anime) => (
    <AnimeCard key={anime.mal_id} anime={anime} />
   ))}
       </ul>
      )}
      {filteredAnime.length === 0 && searchTerm && (
  <p className="text-red-500 mb-5">Anime not found in this list</p>
)}
       </section>
        </div>
      </main>
    </>
  );
}

export default Trending