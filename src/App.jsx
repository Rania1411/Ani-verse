import Search from "./components/Search.jsx";
import Header from "./components/header1.jsx";
import { useState, useEffect } from "react";
const BASE_URL = "https://api.myanimelist.net/v2";
const API_KEY = import.meta.env.VITE_ANIME_API_KEY;
const API_OPYIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-MAL-CLIENT-ID": API_KEY,
  },
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  async function fetchAnime() {
    try {
      console.log("Fetching anime...");
      const endpoint = `${BASE_URL}/anime/ranking`;
      const response = await fetch(endpoint, API_OPYIONS);
      console.log(response);
      if (!response.ok) {
        throw new Error(" failed to fetch anime");
      }
      const data = await response.json();
      console.log(data);
      if (data.data === "false") {
      }
    } catch (error) {
     console.log(`Error finding anime: ${error}`);
    }
  }
  useEffect(() => {
  fetchAnime();
}, []);
  return (
    <>
      <Header />
      <main>
        <div className="pattern" />
        <div className="wrapper flex h-screen w-full bg-[url('/background.jpg')] bg-center bg-cover bg-no-repeat  flex-col justify-start items-center  text-center ">
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
        </div>
      </main>
    </>
  );
}

export default App;
