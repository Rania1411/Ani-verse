
import React from 'react'
import Search from "../components/Search.jsx";
const BASE_URL = "https://api.jikan.moe/v4";
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

const allAnime = () => {
    const [searchTerm, setSearchTerm] = useState("");
      const [errorMessage, setErrorMessage] = useState("");
      const [animeList,setAnimeList]=useState([]);
      const[isLoading,setLoading]=useState(false);
      async function fetchAnime() {
        setErrorMessage('')
        setLoading(true)
        try {
       
          const endpoint = `${BASE_URL}/anime/{id}/full`;
          const response = await fetch(endpoint, API_OPTIONS);
         
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
  return (
    <div className='allanime'>
  <Serach/>
    </div>
  )
}

export default allAnime