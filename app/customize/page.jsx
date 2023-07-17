"use client"
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css"
import Customize from '@/components/Customize/Customize'
import Art from "@/components/Art/Art";
import { AddressContext } from "@/context/AddressContext";

const CustomizePage = () => {
  const [userPixels, setUserPixels] = useState([]);
  const [speed, setSpeed] = useState(null);
  const [columns, setColumns] = useState(null);
  const [isCustomized, setIsCustomized] = useState(false);
  const { userAddress } = useContext(AddressContext);
  // const router = useRouter();

  // useEffect(() => {
  //     if (!userAddress) {
  //       return router.push("/");
  //     }
  // }, [userAddress])

  const setCustomizedData = (colorObj, speed, columns) => {
    const userPixels = JSON.stringify(
      Object.entries(colorObj).map(([k, v]) => v)
    );
    setUserPixels(userPixels);
    setSpeed(speed);
    setColumns(columns);
    setIsCustomized(true);
  };

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

  return (
    <div className={styles.container}>
      {userAddress ? (
        <>
          <Customize onCustomize={setCustomizedData} />
          {isCustomized && (
            <Art userPixels={userPixels} speed={speed} columns={columns} />
          )}
        </>
      ) : (
        <div className={styles.connect_notif}>Please Connect Your Wallet To Inscribe</div>
      )}
    </div>
  );
}

export default CustomizePage;