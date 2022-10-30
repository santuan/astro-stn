import { useCallback, useState } from "react";

export default function Youtube({ video, title, thumbnail }) {
  const src = `https://www.youtube.com/embed/${video}`;

  const [isActive, setIsActive] = useState(false);

  const handleClick = useCallback(() => {
    setIsActive((current) => !current);
    console.log("active");
  }, []);

  return (
    <div className="relative">
      <div className={`${isActive ? "block" : "hidden"} youtube-container aspect-w-16 aspect-h-9 relative`}>
        <iframe width="100%" height="450" src={src} allow="autoplay; encrypted-media" allowFullScreen title={title} />
      </div>
      <div
        className={`${isActive ? "hidden " : "block"} duration-300 bg-black youtube-container aspect-w-16 aspect-h-9 group`}
        onClick={handleClick}
      >
        <span className="absolute top-0 left-0 right-0 z-50 p-3 font-sans text-lg font-medium text-left text-white duration-300 group-hover:opacity-0">
          {title}
        </span>
        <div className="absolute inset-0 z-50 cursor-pointer flex justify-center items-center ">
          <svg
            className="relative w-16 h-16 duration-300 fill-white md:scale-125 group-hover:scale-100"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"></path>
          </svg>
        </div>
        <img
          src={thumbnail}
          alt={title}
          width="1280"
          height="720"
          className="pointer-events-none duration-300 opacity-30 group-hover:opacity-80"
        />
      </div>
    </div>
  );
}
