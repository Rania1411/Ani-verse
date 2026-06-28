
import React from 'react'
import Search from "../components/Search.jsx";
import Header from '../components/Header.jsx';  
import{useState,useEffect} from'react'
 import Footer from"../components/Footer.jsx"
import Showmore from '../components/Showmore.jsx'
import AnimeCard from"../components/AnimeCard.jsx" 
import Spinner from "../components/Spinner.jsx" 
const BASE_URL = "https://api.jikan.moe/v4";
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

  const AllAnime = () => {
    const [page,setPage]=useState(1)
    const [lastPage, setLastPage] = useState(1);
     const[searchTerm,setSearchTerm]=useState("")
     const[errorMsg,setErrorMsg]=useState('')
     const[isLoading,setIsLoading]=useState(false);
     const[animeList,setAnimeList]=useState([]);
     const [debouncedSearch, setDebouncedSearch] = useState("");
     useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(searchTerm);
  }, 500);

  return () => clearTimeout(timer);
}, [searchTerm]);
      async function fetchAllAnime () {
        setErrorMsg('');
        setIsLoading(true);
        try{
         const endpoint = debouncedSearch.trim()
  ? `${BASE_URL}/anime?q=${debouncedSearch}&page=${page}&genres_exclude=12`
  : `${BASE_URL}/anime?page=${page}&genres_exclude=12`;
            const response = await fetch(endpoint, API_OPTIONS);
          
            if(!response.ok){
               throw new Error(" failed to fetch anime");
                }
             const data=  await response.json();
            if (!data.data || data.data.length === 0) {
            console.log("No anime found");
            setAnimeList([]);
               }

             setAnimeList(data.data.filter((anime)=> 
              anime.rating !== "Rx - Hentai" &&
               anime.rating !== "R+ - Mild Nudity")||[]);
             setLastPage(data.pagination.last_visible_page);
                     }
                     catch(error ){
                    console.log(`Error finding anime: ${error}`);
                 setErrorMsg(error.message);
              }
    finally{
      setIsLoading(false);
    }
        }
        useEffect(()=>
          { fetchAllAnime()}
          ,[page, debouncedSearch])
 
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
<Search 
searchTerm={searchTerm}
setSearchTerm={setSearchTerm}
   setPage={setPage}
/>
{isLoading ? (
  <Spinner />
) : (
  <ul className="flex flex-wrap justify-center gap-6 mt-8">
    {animeList.map((anime) => (
      <AnimeCard key={anime.mal_id} anime={anime} />
    ))}
  </ul>
)}

<div className="mt-10 mb-0">
    <Showmore
        page={page}
        setPage={setPage}
        lastPage={lastPage}
    />
</div>
<Footer/>
    </div>
  )
}
export default AllAnime;