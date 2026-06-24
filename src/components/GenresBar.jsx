import React from 'react'
import { Swords ,Laugh ,
    Compass,  Drama,
  Sparkles,
  Ghost,
  Trophy,
  Heart,
  Search,
  Landmark} from "lucide-react";
const genresbar = () => {
     const genreItem = `
     pl-10
     flex
     flex-row
     gap-4
    p-3 
     rounded-lg 
     hover:bg-violet-500
      cursor-pointer 
      transition-all
       duration-300 `;

  return (
 <div
  className="
   fixed
  top-7
bottom-6
  left-2

  h-150
  w-64
  p-6
  mt-10
  flex flex-col
  gap-0.5
  rounded-2xl
  border border-purple-500/30
  bg-white/10
  backdrop-blur-lg
  text-white
  shadow-xl
  "
>
    <h3 className='bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent font-bold text-xl'>GENRES</h3>
  <div className={genreItem}>
    <Swords />
  <h2>Action</h2>
</div>

<div className={genreItem}>
     < Compass />
  <h2>Adventure</h2>
</div>

<div className={genreItem}>
    <Sparkles />
  <h2>Avant Garde</h2>
</div>

<div className={genreItem}>
    <Laugh />
  <h2>Comedy</h2>
</div>

<div className={genreItem}>
      <Drama />
  <h2>Drama</h2>
</div>

<div className={genreItem}>
    <Sparkles/>
  <h2>Fantasy</h2>
</div>

<div className={genreItem}>
    <Ghost  />
  <h2>Horror</h2>
</div>

<div className={genreItem}>
      <Trophy />
  <h2>Sports</h2>
</div>

<div className={genreItem}>
      <Heart />
  <h2>Romance</h2>
</div>

<div className={genreItem}>
      <Search  />
  <h2>Detective</h2>
</div>

<div className={genreItem}>
     <Landmark />
  <h2>Historical</h2>
</div>
</div>
  )
}

export default genresbar