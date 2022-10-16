import styles from "./SubHeading.module.css"
import React from 'react'

const SubHeading = ({ title }) => {
  return (
    <div className={styles.Container}>
      <h2 className={styles.Title}>
        <span className={styles.Misc}>
          {title}
        </span>
      </h2>
    </div>
  );
};

export default SubHeading;
