import styles from "./Heading.module.css";
import React from "react";
const Heading = ({ title, subtitle }) => {
  return (
    <>
      <h1 className={styles.Title}>{title}</h1>
      {subtitle && <h2 className={styles.Subtitle}>{subtitle}</h2>}
      <hr className={styles.Divider} />
    </>
  );
};

export default Heading;
