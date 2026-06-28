
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FaGithub,
  FaDiscord,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";



export default function Footer() {

  const currentYear = new Date().getFullYear();

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setShowButton(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const exploreLinks = [
    {
      title: "Trending",
      path: "/",
    },
    {
      title: "Top Anime",
      path: "/top",
    },
    {
      title: "Genres",
      path: "/genres",
    },
    {
      title: "Seasonal",
      path: "/seasonal",
    },
  ];

  const resourceLinks = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Privacy",
      path: "/privacy",
    },
    {
      title: "Terms",
      path: "/terms",
    },
  ];

  const socials = [
    {
      icon: <FaGithub />,
      url: "https://github.com/yourgithub",
    },
    {
      icon: <FaDiscord />,
      url: "https://discord.gg/",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/",
    },
  ];

  return (
    <>
  <footer className="relative mt-28 overflow-hidden border-t border-white/10 bg-[#070611]">

   
    <div className="absolute left-1/2 top-0 h-72 w-[650px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[180px]" />


<div
  className="absolute  inset-0 opacity-80"
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
    `,
    backgroundSize: "70px 70px",
    maskImage: "linear-gradient(to bottom, white, transparent)",
    WebkitMaskImage: "linear-gradient(to bottom, white, transparent)",
  }}
/>
    <div className="relative mx-auto max-w-7xl px-8 py-20">

      <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr]">

      

        <div>

          <Link to="/">
            <img
              src="/logo.png"
              alt="AniVerse"
              className="w-30 ml-40 transition duration-500 hover:scale-140"
            />
          </Link>

          <p className="mt-6 max-w-md leading-8 text-gray-400">
            AniVerse helps you discover new anime, explore genres,
            and keep up with trending series through a clean,
            fast, and immersive experience.
          </p>

          <div className="mt-10 flex gap-6">

            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-gray-500 transition duration-300 hover:-translate-y-1 hover:text-violet-400"
              >
                {social.icon}
              </a>
            ))}

          </div>

        </div>

     

        <div>

          <h3 className="mb-8 text-lg font-semibold text-white">
            Explore
          </h3>

          <ul className="space-y-5">

            {exploreLinks.map((item) => (

              <li key={item.title}>

                <Link
                  to={item.path}
                  className="
                    relative
                    text-gray-400
                    transition
                    hover:text-white

                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:w-0
                    after:bg-violet-500
                    after:transition-all
                    hover:after:w-full
                  "
                >
                  {item.title}
                </Link>

              </li>

            ))}

          </ul>

        </div>

      

        <div>

          <h3 className="mb-8 text-lg font-semibold text-white">
            Resources
          </h3>

          <ul className="space-y-5">

            {resourceLinks.map((item) => (

              <li key={item.title}>

                <Link
                  to={item.path}
                  className="
                    relative
                    text-gray-400
                    transition
                    hover:text-white

                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:w-0
                    after:bg-violet-500
                    after:transition-all
                    hover:after:w-full
                  "
                >
                  {item.title}
                </Link>

              </li>

            ))}

          </ul>

        </div>

      </div>
            {/* Bottom */}

      <div className="mt-20 border-t border-white/10 pt-8">

        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

          <p className="text-sm text-gray-500">
            © {currentYear} AniVerse. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <Link
              to="/about"
              className="text-sm text-gray-400 transition hover:text-violet-400"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-sm text-gray-400 transition hover:text-violet-400"
            >
              Contact
            </Link>

            <button
              onClick={scrollTop}
              className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-violet-400"
            >
              Back to Top

              <FaArrowUp className="text-xs transition-transform duration-300 group-hover:-translate-y-1" />
            </button>

          </div>

        </div>

      </div>

    </div>

  </footer>

  {showButton && (

    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className="
      fixed
      bottom-8
      right-8
      z-50
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      bg-gradient-to-r
      from-violet-600
      to-fuchsia-600
      text-white
      shadow-lg
      shadow-violet-600/30
      transition-all
      duration-300
      hover:-translate-y-1
      hover:scale-110
      "
    >
      <FaArrowUp />
    </button>

  )}

</>
);
}