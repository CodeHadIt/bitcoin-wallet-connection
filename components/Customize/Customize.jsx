"use client"
import React, { useEffect, useRef, useState } from 'react'
import { FaPalette } from "react-icons/fa";

import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import Picker from '../Color Picker/Picker';
import styles from "./customize.module.css"

const Customize = ({onCustomize}) => {
    const [pickers, setPickers] = useState({
      first: "#fef6e4",
      second: "#f582ae",
      third: "#001858",
      fourth: "#8bd3dd",
      fifth: "#f3d2c1",
    });
    const [randomizeTriggered, setRandomizeTriggered] = useState(false)
    const [speed, setSpeed] = useState(20)
    const [pixels, setPixels] = useState(40);

    useEffect(() => {
        onCustomize(pickers, speed, pixels)
    }, [pickers, speed, pixels, randomizeTriggered])
    const getSpeed = (e) => {
        setSpeed(parseInt(e.target.value));
    }
    const getPixels = (e) => {
        setPixels(parseInt(e.target.value));
    }

    const randomizeValues = (value) => {
        let localPickers = pickers;
        for (var key in localPickers) {
          if (!localPickers.hasOwnProperty(key)) {
            continue;
          }
          localPickers[key] = `#${Math.floor(Math.random() * 16777215).toString(
            16
          )}`;
        }
        delete localPickers.key;
        setPickers(localPickers);
        
        if (value === "all") {
          const speedValue = getRandomNumber(1, 120);
          const pixelValue = getRandomNumber(6, 70);
          setSpeed(speedValue);
          setPixels(pixelValue);
        }
        setRandomizeTriggered(prev => !prev)
    }

    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  return (
    <Card className={styles.card}>
      <div className={styles.card_container}>
        <div className={styles.heading}>
          <FaPalette className={styles.icon} />
          <h3>Customizations</h3>
        </div>
        <div className={styles.customizables}>
          <div className={styles.progress_bars}>
            <div className={styles.speed}>
              <p>Adjust Speed: </p>
              <input
                type="range"
                id="speed"
                className={styles.input}
                min="1"
                max="150"
                value={speed}
                onChange={getSpeed}
              />
              <p>: {speed}</p>
            </div>
            <div className={styles.pixels}>
              <p>Pixels Per Row: </p>
              <input
                type="range"
                id="size"
                className={styles.input}
                min="6"
                max="70"
                value={pixels}
                onChange={getPixels}
              />
              <p>: {pixels}</p>
            </div>
          </div>
          <Picker pickers={pickers} setPickers={setPickers} />
          <div className="input-secondsets">
            <p className={styles.warning}>*Select at least 3 colors</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button onClick={() => randomizeValues("all")}>
            Randomize All Traits
          </Button>
          <Button onClick={() => randomizeValues("colors")}>
            Randomize Colors
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default Customize;