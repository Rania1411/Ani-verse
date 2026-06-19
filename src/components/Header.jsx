import { FaGithub } from "react-icons/fa";

function Header1() {
  return (
    <header
      className="
      sticky top-0 z-50
      w-full
      px-8 py-1
      backdrop-blur-xl
      bg-[#1E1B4B]/100
      border-b border-white/10
      "
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
  <div className="group flex items-center cursor-pointer">
  <img
    src="/logo.png"
    alt="AniVerse Logo"
    className="
      h-14 w-14
      object-contain
      transition-transform duration-300
      group-hover:scale-110
    "
  />

  <div>
    <h1 className="text-2xl font-bold tracking-tight text-white">
      Ani
      <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
        Verse
      </span>
    </h1>

  </div>
</div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-12">
          <li>
            <a
              href="#"
              className="
              text-purple-400
              border-b-2
              border-purple-500
              pb-1
              "
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="
              text-gray-300
              hover:text-purple-400
              transition-all
              duration-300
              "
            >
              Genres
            </a>
          </li>

          <li>
            <a
              href="#"
              className="
              text-gray-300
              hover:text-purple-400
              transition-all
              duration-300
              "
            >
              Featured
            </a>
          </li>

          <li>
            <a
              href="#"
              className="
              text-gray-300
              hover:text-purple-400
              transition-all
              duration-300
              "
            >
              About
            </a>
          </li>
        </ul>

        {/* GitHub Button */}
        <button
          className="
          flex items-center gap-2
          px-5 py-2.5
          rounded-full
          bg-[#0A0F2C]
          border border-purple-500/30
          text-white
          hover:border-purple-500
          hover:bg-purple-500/10
          hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]
          transition-all
          duration-300
          "
        >
          <FaGithub className="text-xl" />
          Star on GitHub
        </button>
      </nav>
    </header>
  );
}

export default Header1;
