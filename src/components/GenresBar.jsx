import React from 'react'
import { Swords ,Laugh ,
    Compass,  Drama,
  Sparkles,
  Ghost,
  Trophy,
  Heart,
  Search,
  Landmark} from "lucide-react";
const genresbar = ({selectedGenre, setSelectedGenre}) => {
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
    <h3 className='bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent font-bold text-xl l'>   GENRES</h3>
  <div className={genreItem} onClick={()=>setSelectedGenre({mal_id:1,name:'Action'})}>
    <Swords />
  <h2>Action</h2>
  
</div>

<div className={genreItem} 
onClick={() => setSelectedGenre({mal_id:2,name:'Adventure'})}>
     < Compass />
  <h2>Adventure</h2>
</div>

<div className={genreItem}  onClick={() => setSelectedGenre({mal_id:5,name:'Avant Garde'})}>
    <Sparkles />
  <h2>Avant Garde</h2>
</div>

<div className={genreItem}   onClick={() => setSelectedGenre({mal_id:4,name:'Comedy'})}>
    <Laugh />
  <h2>Comedy</h2>
</div>

<div className={genreItem}  onClick={() => setSelectedGenre({mal_id:8,name:'Darma'})}>
      <Drama />
  <h2>Drama</h2>
</div>

<div className={genreItem}   onClick={() => setSelectedGenre({mal_id:10,name:'Fantasy'})}>
    <Sparkles/>
  <h2>Fantasy</h2>
</div>

<div className={genreItem}    onClick={() => setSelectedGenre({mal_id:14,name:'Horror'})}>
    <Ghost  />
  <h2>Horror</h2>
</div>

<div className={genreItem}  onClick={() => setSelectedGenre({mal_id:30,name:'Sports'})}>
      <Trophy />
  <h2>Sports</h2>
</div>

<div className={genreItem} onClick={() => setSelectedGenre({mal_id:22,name:'Romance'})}>
      <Heart />
  <h2>Romance</h2>
</div>

<div className={genreItem}     onClick={() => setSelectedGenre({mal_id:7,name:'Detective'})}>
      <Search  />
  <h2>Detective</h2>
</div>

<div className={genreItem} onClick={() => setSelectedGenre({mal_id:13,name:'Historical<'})}>
     <Landmark />
  <h2>Historical</h2>
</div>
</div>
  )
}

export default genresbar