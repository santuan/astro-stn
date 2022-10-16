import React from "react";
import Confetti from "react-dom-confetti";
export default function Trinomia() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-20 overflow-hidden border-b dark:border-gray-700">
      <p className="w-full mb-6 font-mono text-center select-all dark:text-white">
      santuan.bot@gmail.com
      </p>
      <button
        onClick={() => {
          copyToClipboard("santuan.bot@gmail.com");
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 3000);
        }}
      >
        <div className="flex justify-center py-1 mx-auto space-x-1 text-3xl group ">
          <svg
            className="duration-300 dark:text-white group-hover:text-blue-500"
            width="32"
            height="32"
            viewBox="0 0 16 16"
          >
            <path fill="currentColor" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" />
          </svg>
          <svg
            className="duration-300 dark:text-white group-hover:text-red-500"
            width="32"
            height="32"
            viewBox="0 0 16 16"
          >
            <circle cx="8" cy="8" r="8" fill="currentColor" />
          </svg>
          <svg
            className="duration-300 dark:text-white scale-105 group-hover:text-yellow-500"
            width="32"
            height="32"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}

const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 19,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 8000,
  stagger: 13,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#2f85c0", "#52a3d9", "#e74446", "#d52b2a", "#f8c843", "#f8a834"],
};
