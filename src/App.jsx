import React from 'react'
import { Routes, Route } from "react-router-dom";
import Trending from "./pages/Trending.jsx";
import AllAnime from "./pages/AllAnime.jsx";

function App() {
  return  (
  <Routes>
      <Route path="/" element={<Trending />} />
      <Route path="/AllAnime" element={<AllAnime />} />
    </Routes>
    );
}

export default App;