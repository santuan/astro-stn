import React from "react";

const HeaderCv = () => {
  return (
    <>
      <div className="relative z-0 grid w-full max-w-2xl grid-cols-1 mx-auto sm:gap-2 print:max-w-full sm:grid-cols-5 print:grid-cols-5">
        <div className="relative w-full col-span-2 print:w-auto">
          <h1 className="relative z-10 flex flex-col font-sans text-2xl leading-relaxed tracking-widest uppercase dark:text-white print:text-xl">
            <span className="font-extrabold">santiago</span>
            <span className="font-medium">rodríguez</span>
            <span className="font-light">couto</span>
          </h1>
          <div className="absolute top-0 right-0 z-0 flex items-center justify-center w-32 h-32 font-serif tracking-tighter text-white transform dark:text-zinc-900 print:hidden">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              className="w-32 h-32 mx-auto"
              viewBox="0 0 60 74"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="opacity-25 dark:opacity-75">
                <path
                  className="text-white fill-current dark:text-gray-900 print:text-white"
                  d="M203.61 63.64c4.79 0 7.26 2.78 7.26 8.26 0 4.49-1.46 11-1.46 14.61 0 4.41 2.24 6.72 7.26 7.34v1.39c-5 .62-7.26 2.94-7.26 7.35 0 3.63 1.46 10.12 1.46 14.6 0 5.49-2.47 8.27-7.26 8.27a24.34 24.34 0 0 1-2.81-.24V64a15.68 15.68 0 0 1 2.81-.36Z"
                  transform="translate(-166.91 -63.64)"
                  style={{
                    filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))",
                  }}
                />
              </g>
              <g className="opacity-25 dark:opacity-75">
                <path
                  className="text-white fill-current dark:text-gray-900 print:text-white"
                  d="M186.29 63.64c4.79 0 7.27 2.78 7.27 8.26 0 4.49-1.47 11-1.47 14.61 0 4.41 2.24 6.72 7.26 7.34v1.39c-5 .62-7.26 2.94-7.26 7.35 0 3.63 1.47 10.12 1.47 14.6 0 5.49-2.48 8.27-7.27 8.27a24.07 24.07 0 0 1-2.8-.24V64a15.51 15.51 0 0 1 2.8-.36Z"
                  transform="translate(-166.91 -63.64)"
                  style={{
                    filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))",
                  }}
                />
              </g>
              <g className="opacity-25 dark:opacity-75">
                <path
                  className="text-white fill-current dark:text-gray-900 print:text-white"
                  d="M169.72 63.64c4.79 0 7.26 2.78 7.26 8.26 0 4.49-1.47 11-1.47 14.61 0 4.41 2.24 6.72 7.27 7.34v1.39c-5 .62-7.27 2.94-7.27 7.35 0 3.63 1.47 10.12 1.47 14.6 0 5.49-2.47 8.27-7.26 8.27a24.34 24.34 0 0 1-2.81-.24V64a15.68 15.68 0 0 1 2.81-.36Z"
                  transform="translate(-166.91 -63.64)"
                  style={{
                    filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))",
                  }}
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="grid flex-1 w-full grid-cols-2 col-span-3 gap-3 mt-5 font-medium dark:text-white print:mt-0 print:grid-cols-2">
          <div className="flex flex-col my-2 space-y-1 text-sm print:space-y-1">
            <span>Buenos Aires (Argentina)</span>
            <span>Full Stack Developer </span>
            <span>{"&"} Web Designer</span>
          </div>
          <div className="flex flex-col my-2 space-y-1 text-sm italic print:space-y-1 print:text-right md:text-right">
            <a
              target="_blank"
              className="underline hover:opacity-50"
              rel="noopener noreferrer"
              href="https://srcouto.netlify.app/cv/en"
            >
              srcouto.netlify.app/cv/en
            </a>
            <span className="underline select-all">santuan.bot@gmail.com</span>
            <span className="underline hover:opacity-50">ask for portfolio</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCv;
