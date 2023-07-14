"use client"
import React from 'react'

import { PiTelevisionSimpleDuotone } from "react-icons/pi"
import styles from "./preview.module.css"

const Preview = ({ frameSrc }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <PiTelevisionSimpleDuotone className={styles.icon} />
          <h3>Preview</h3>
        </div>
        <iframe
          src={frameSrc ? frameSrc : ""}
          className={styles.frame}
        ></iframe>
        <div className="incribe"></div>
      </div>
    </>
  );
}

export default Preview