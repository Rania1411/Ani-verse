import Search from "./components/Search.jsx";
import Header from "./components/Header.jsx";
import { useState, useEffect } from "react";
import Spinner  from"./components/Spinner.jsx"
import AnimeCard from"./components/AnimeCard.jsx"
const BASE_URL = "https://api.jikan.moe/v4";
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [animeList,setAnimeList]=useState([]);
  const[isLoading,setLoading]=useState(false);
  async function fetchAnime() {
    setErrorMessage('')
    setLoading(true)
    try {
      console.log("Fetching anime...");
      const endpoint = `${BASE_URL}/top/anime`;
      const response = await fetch(endpoint, API_OPTIONS);
      console.log(response);
      if (!response.ok) {
        throw new Error(" failed to fetch anime");
      }
      const data = await response.json();
      console.log(data);
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
            <img src="/hero.png" alt="hero" className="w-120" />
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
           <h2 className="text-white mt-5 font-bold text-2xl">Top Anime</h2>

          {isLoading ? (
     <Spinner/>
        ) : errorMessage ? (
      <p className="text-red-500">{errorMessage}</p>
        ) : (
   <ul className=" flex flex-wrap justify-center gap-6 mt-8">
   
    {animeList.map((anime) => (
    <AnimeCard key={anime.mal_id} anime={anime} />
   ))}
       </ul>
      )}
       </section>
        </div>
      </main>
    </>
  );
}

export default App;
