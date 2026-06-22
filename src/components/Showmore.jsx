import React from "react";

const Showmore = ({ page, setPage, lastPage }) => {
  return (
    <div className="showmore w-full">
    <footer
  className="
    flex flex-nowrap justify-center items-center gap-10
    backdrop-blur-xl
    bg-[#1E1B4B]/80
    border border-white/10
    rounded-2xl
    shadow-lg
    p-5
    max-w-2xl
    mx-auto
    my-10
    
  "
>
        <button onClick={() => setPage(1)}
          className="
           hover:bg-gradient-to-r
from-[#12002E]
via-[#0A1A6B]
to-[#001B4D]
            px-5 py-2
            rounded-lg
            bg-white/10
            hover:bg-white/20
            transition-all duration-300
            border border-white/10
            text-white
            font-medium
          "
        >
           First Page
        </button>

        <button
          className="
                hover:bg-gradient-to-r
from-[#12002E]
via-[#0A1A6B]
to-[#001B4D]
            px-5 py-2
            rounded-lg
            bg-white/10
            hover:bg-white/20
            transition-all duration-300
            border border-white/10
            text-white
            font-medium
          "
          onClick={() => page > 1 && setPage(page - 1)}
        >
           Previous
        </button>

        <button
          className="
                hover:bg-gradient-to-r
from-[#12002E]
via-[#0A1A6B]
to-[#001B4D]
            px-5 py-2
            rounded-lg
             bg-white/10
            hover:bg-purple-500
            transition-all duration-300
            text-white
            font-semibold
            shadow-md
          "
            onClick={() =>  page < lastPage && setPage(page + 1)}
        >
          Next 
        </button>

        <button
          className="
                   hover:bg-gradient-to-r
from-[#12002E]
via-[#0A1A6B]
to-[#001B4D]
            px-5 py-2
            rounded-lg
            bg-white/10
            hover:bg-white/20
            transition-all duration-300
            border border-white/10
            text-white
            font-medium
          "
           onClick={() => setPage(lastPage)}
        >
          Last Page 
        </button>
      </footer>
    </div>
  );
};

export default Showmore;