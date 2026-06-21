import React from "react";

const AnimeCard = ({
  anime: {
    title,
    score,
    year,
    episodes,
    rank,
    images,
  },
}) => {
  return (
    <div
      className="
        group
        relative
        w-[280px]
      
        overflow-hidden
        rounded-3xl
        bg-[#0F0D23]
        border
        border-white/10
        shadow-2xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-purple-500/30
      "
    >
    
      <div className="relative overflow-hidden">
        <img
          src={images.jpg.large_image_url}
          alt={title}
          className="
            h-[400px]
            w-full
            object-cover
            transition-all
            duration-700
            group-hover:scale-110
          "
        />

      
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        
        <div
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-purple-600
            px-3
            py-1
            text-xs
            font-bold
            text-white
          "
        >
          #{rank}
        </div>

        
        <div
          className="
            absolute
            right-4
            top-4
            rounded-full
            bg-yellow-400
            px-3
            py-1
            text-xs
            font-bold
            text-black
          "
        >
          ⭐ {score ?? "N/A"}
        </div>

        <div
          className="
    absolute
    inset-0
    flex
    items-end
    p-6 
    opacity-0
    transition-all
    duration-500
    group-hover:opacity-100
  "
        >
          <div className="rounded-2xl bg-black/50 backdrop-blur-md ">
            <h3 className="text-xl font-bold text-white line-clamp-2">
              {title}
            </h3>

            <div className="mt-3 flex gap-2 flex-wrap pl-3 ">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                📅 {year ?? "Unknown"}
              </span>

              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                🎬 {episodes ?? "?"} Episodes
              </span>
            </div>
          </div>
        </div>
      </div>

      
      <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500" />
    </div>
  );
};

export default AnimeCard;