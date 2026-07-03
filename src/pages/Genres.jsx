import { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import GenresBar from "../components/GenresBar.jsx";
import Spinner from "../components/Spinner.jsx";
import AnimeCard from "../components/AnimeCard.jsx";

const BASE_URL = "https://api.jikan.moe/v4";

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

const Genres = () => {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState({mal_id:1,name:'Action'});
  const [hero,setHero]=useState(0);

 const images=[
  "/juju.jpg",
  "/bleu.jpg",
  "/fullmetal.jpg",
  "/hunter.jpg",
"/demon.jpg",
"/naruto.jpg",
"/tokyo.jpg"];
const prevHero = hero === 0 ? images.length - 1 : hero - 1;
const nextHero = (hero + 1) % images.length;

  async function fetchAnime() {
    setLoading(true);

    try {
      const endpoint = `${BASE_URL}/anime?genres=${selectedGenre.mal_id}&genres_exclude=9,12,49,58&order_by=score&sort=desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch anime");
      }

      const data = await response.json();

      setAnimeList(data.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAnime();
  }, [selectedGenre]);

  return (
    <div
      className="
      min-h-screen
      bg-[url('/bg2.png')]
      bg-cover
      bg-center
      bg-fixed
      bg-no-repeat
    "
    >
      <Header />

      <div className="flex">
       
        <GenresBar
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />

      
        <div className="flex-1 ml-64 px-8 pb-12">
         
          <div
            className="relative mt-8 h-[350px] overflow-hidden rounded-2xl border border-violet-500/20 shadow-2xl"
            style={{
              backgroundImage: "url('/genre-banner.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
          
            <div className="absolute inset-0 bg-gradient-to-r from-[#090817]/95 via-[#090817]/70 to-transparent" />

         
            <div className="absolute right-10 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[120px]" />

         
            <div className="relative z-10 flex h-full flex-col justify-center px-14">
              <p className="text-sm font-semibold uppercase tracking-[6px] text-violet-400">
                Discover
              </p>

          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white">
  Discover
  <span className="block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
    Amazing Anime
  </span>
</h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-gray-300 ">
                Browse thousands of anime, 
                discover hidden<br/>  gems,
                and find your next favorite series through <br/>every
                genre imaginable.
              </p>
            </div>
  <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[520px] h-[340px]">

 
  <img
    src={images[prevHero]}
    alt=""
    className="
      absolute
      left-0
      top-6
      w-40
      h-60
      object-cover
      rounded-2xl
      opacity-40
      rotate-[-14deg]
      scale-100
      blur-[1px]
      transition-all
      duration-500
    "
  />
<div
  className="
    absolute
    left-1/2
    top-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-60
    h-60
    rounded-full
    bg-violet-500/30
    blur-[120px]
  "
/>

  <img
    src={images[hero]}
    alt=""
    className="
    top-1
      absolute
      left-1/2
      -translate-x-1/2
      w-52
      h-70
      object-cover
      rounded-3xl
      shadow-[0_25px_60px_rgba(0,0,0,0.6)]
      border-2
      border-violet-500/30
      z-20
      transition-all
      duration-500
      animate-[float_4s_ease-in-out_infinite]
    "
  />

 
  <img
    src={images[nextHero]}
    alt=""
    className="
      absolute
      right-0
      top-6
      w-40
      h-60
      object-cover
      rounded-2xl
      opacity-40
      rotate-[12deg]
      scale-100
      blur-[1px]
      transition-all
      duration-500
    "
  />
</div>
 
<div className="absolute bottom-6 left-164 -translate-x-1/2 z-30 flex gap-3">
  {images.map((_, index) => (
    <button
      key={index}
      onClick={() => setHero(index)}
      className={`
        transition-all
        duration-300
        rounded-full
        ${
          hero === index
            ? "w-8 h-2 bg-violet-500"
            : "w-2 h-2 bg-white/40 hover:bg-white"
        }
      `}
    />
  ))}
</div>
</div>
<div  className="
flex 
 justify-center 
 items-center
    relative
    top-5
    h-14
    w-60
    mx-auto
    rounded-xl
    overflow-hidden
    border
    border-violet-500/30
    bg-gradient-to-r
    from-[#090817]
    via-[#090817]
    to-transparent

    transition-all
    duration-300
    ease-in-out

    hover:border-violet-400
    hover:shadow-lg
    hover:shadow-violet-500/20
    hover:-translate-y-1
    hover:scale-105
  ">
   <h2 className="text-2xl text-white text-center" 
 >
     {selectedGenre.name}
</h2></div>
 
          <div className="mt-12">
            {isLoading ? (
              <Spinner />
            ) : (
              <ul className="flex flex-wrap justify-center gap-8">
                {animeList.map((anime) => (
                  <AnimeCard
                    key={anime.mal_id}
                    anime={anime}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genres;
