"use client"
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css"
import Customize from '@/components/Customize/Customize'
import Art from "@/components/Art/Art";
import { AddressContext } from "@/context/AddressContext";
// import { openingTags64, closingTags64 } from '@/libs/Tags'

const CustomizePage = () => {
    // const [frameSrc, setFrameSrc] = useState(null);
    const [userPixels, setUserPixels] = useState([]);
    const [speed, setSpeed] = useState(null);
    const [columns, setColumns] = useState(null);
    const [isCustomized, setIsCustomized] = useState(false)
    const { userAddress } = useContext(AddressContext);
    const router = useRouter();

    const setCustomizedData = (colorObj, speed, columns) => {
        const userPixels = JSON.stringify(
          Object.entries(colorObj).map(([k, v]) => v)
        );
        setUserPixels(userPixels);
        setSpeed(speed);
        setColumns(columns);
        setIsCustomized(true);
    }

    // const getFrameSource = (colors, speed, columns) => {
    //   const decodedClosingTags = atob(closingTags64);
    //   const decodedOpeningTags = atob(openingTags64);
      
    //   const middleTags = `let userPixels = ${userPixels};\nlet userColumns = ${columns};\nlet userSpeed = ${speed};\nlet userStroke = 1;\nlet grid = [];`;

    //   const finalHTML = decodedOpeningTags + middleTags + decodedClosingTags;
    //   //Encode the final HTML
    //   let finalHTML64 = btoa(finalHTML);
    //   const decodedHTML = atob(finalHTML64);
    //     console.log(decodedHTML, "decoded")
    //   const finalSrc = "data:text/html;base64," + finalHTML64;
    //   console.log(finalSrc, "final");
    //   setFrameSrc(decodedHTML);
    // };
  if (!userAddress)  {
    return router.push("/")
  }
  return (
    <div className={styles.container}>
      <Customize onCustomize={setCustomizedData} />
      {isCustomized && (
        <Art userPixels={userPixels} speed={speed} columns={columns} />
      )}
    </div>
  );
}

export default CustomizePage;