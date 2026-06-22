import React from 'react'
const Search = ({ searchTerm, setSearchTerm,setPage }) => {
  return (
    <div className='search'>
      <div className="mt-8 flex items-center gap-3 px-2 bg-white/8 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg 
       focus-within:border-purple-500
  focus-within:shadow-[0_0_25px_rgba(168,85,247,0.5)]
  transition-all
  duration-300 ">
        <img
          src="/search.png"
          alt="search-icon"
          className="w-15 h-15 opacity-70"
        />

        <input
          type="text"
          placeholder="Search for your favorite anime..."
          value={searchTerm}
          onChange={
            (e) => {setSearchTerm(e.target.value) ;
            setPage(1);
          }}
          
          className=" text-white bg-transparent text-black placeholder-gray-400 outline-none text-lg w-120
          "
        />
      </div>
    </div>
  )
}

export default Search