"use client"
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css"
import Customize from '@/components/Customize/Customize'
import dynamic from "next/dynamic";
import { AddressContext } from "@/context/AddressContext";
const Art = dynamic(() => import("@/components/Art/Art"), {ssr: false})


const CustomizePage = () => {
  const [userPixels, setUserPixels] = useState([]);
  const [speed, setSpeed] = useState(null);
  const [columns, setColumns] = useState(null);
  const [isCustomized, setIsCustomized] = useState(false);
  const { userAddress } = useContext(AddressContext);
  const router = useRouter();

  useEffect(() => {
    if (!userAddress) {
      return router.push("/");
    }
  }, [userAddress])

  const setCustomizedData = (colorObj, speed, columns) => {
    const userPixels = JSON.stringify(
      Object.entries(colorObj).map(([k, v]) => v)
    );
    setUserPixels(userPixels);
    setSpeed(speed);
    setColumns(columns);
    setIsCustomized(true);
  };

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