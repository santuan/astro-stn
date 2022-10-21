import styles from "./SubHeading.module.css";
import React from "react";

const SubHeading = ({ title, link }) => {
  return (
    <div className={styles.Container}>
      <h2 className={styles.Title}>
        <span className={styles.Misc}>{title}</span>
      </h2>
      {link && (
        <a href="/blog" className="flex items-center justify-between w-32 cursor-pointer dark:text-white group">
          <span className="text-xs uppercase duration-300 opacity-0 group-hover:opacity-90">Ver más</span>
          <svg
            className="text-xl duration-300 -translate-x-4 group-hover:-translate-x-6 dark:fill-white"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      )}
    </div>
  );
};

export default SubHeading;
