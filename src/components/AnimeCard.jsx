import React from 'react'

const AnimeCard = ({ anime: { title, score, year, episodes, images } }) => {
  return (
    <div
      className="
        anime-card
        mt-
        w-64
        overflow-hidden
        rounded-2xl
        bg-[#1E1B4B]/70
        backdrop-blur-md
        border border-white/10
        shadow-lg
        hover:scale-105
        hover:border-purple-500/50
        transition-all
        duration-300
      "
    >
      <img
        src={images.jpg.large_image_url}
        alt={title}
        className="w-full h-80 object-cover"
      />

      <div className="p-4 text-left">
        <h3 className="text-white font-bold text-lg line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center gap-4 mt-3 text-sm text-gray-300">
          <span>⭐ {score ?? "N/A"}</span>
          <span>📅 {year ?? "?"}</span>
        </div>

        <p className="mt-2 text-gray-400 text-sm">
          Episodes: {episodes ?? "?"}
        </p>
      </div>
    </div>
  );
}

export default AnimeCard