import React from 'react'
import { Routes, Route } from "react-router-dom";
import Trending from "./pages/Trending.jsx";
import AllAnime from "./pages/AllAnime.jsx";
import Genres from './pages/Genres.jsx';
import Seasonal from "./pages/Seasonal.jsx";

function App() {
  return  (
     <div>
  <Routes>
      <Route path="/" element={<Trending />} />
      <Route path="/AllAnime" element={<AllAnime />} />
      <Route path='/Genres' element={<Genres/>}/>
      <Route path='/Seasonal' element={<Seasonal/>}/>
    </Routes>
    </div>
    );
}

export default App;