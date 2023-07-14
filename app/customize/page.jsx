"use client"
import React, { useState } from "react";
import styles from "./page.module.css"
import Customize from '@/components/Customize/Customize'
import Preview from '@/components/Preview/Preview'
import { openingTags64, closingTags64 } from '@/libs/Tags'

const CustomizePage = () => {
    const [frameSrc, setFrameSrc] = useState(null)
    const setCustomizedData = (colorObj, speed, columns) => {
        getFrameSource(colorObj, speed, columns);
    }

    const getFrameSource = (colors, speed, columns) => {
      const decodedClosingTags = atob(closingTags64);
      const decodedOpeningTags = atob(openingTags64);
      const userPixels = JSON.stringify(
        Object.entries(colors).map(([k, v]) => v)
      );
      const middleTags = `let userPixels = ${userPixels};\nlet userColumns = ${columns};\nlet userSpeed = ${speed};\nlet userStroke = 1;\nlet grid = [];`;

      const finalHTML = decodedOpeningTags + middleTags + decodedClosingTags;
      //Encode the final HTML
      let finalHTML64 = btoa(finalHTML);
      const decodedHTML = atob(finalHTML64);
        console.log(decodedHTML, "decoded")
    //   const contentType = "text/html";
      const finalSrc = "data:text/html;base64," + finalHTML64;
      console.log(finalSrc, "final");
      setFrameSrc(decodedHTML);
    };
  return (
    <div className={styles.container}>
      <Customize onCustomize={setCustomizedData} />
      <Preview frameSrc={frameSrc} />
    </div>
  );
}

export default CustomizePage;