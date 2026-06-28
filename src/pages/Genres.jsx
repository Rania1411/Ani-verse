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
  const [selectedGenre, setSelectedGenre] = useState(1);

  async function fetchAnime() {
    setLoading(true);

    try {
      const endpoint = `${BASE_URL}/anime?genres=${selectedGenre}&genres_exclude=9,12,49,58&order_by=score&sort=desc`;

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

      
        <div className="flex-1 ml-64 px-10 pb-12">
         
          <div
            className="relative mt-8 h-[280px] overflow-hidden rounded-3xl border border-violet-500/20 shadow-2xl"
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

              <h1 className="mt-3 text-5xl font-bold text-white">
                Explore Anime
                <br />
                by Genre
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-gray-300">
                Browse thousands of anime, discover hidden gems,
                and find your next favorite series through every
                genre imaginable.
              </p>
            </div>
          </div>

      
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
