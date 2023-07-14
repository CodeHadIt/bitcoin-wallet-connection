"use client";
import React, { useCallback, useState } from "react";
import { SketchPicker } from "react-color";
import styles from "./picker.module.css"

const Picker = ({ pickers, setPickers }) => {
  const [currentPicker, setCurrentPicker] = useState(null);
  const [pickerOpened, setPickerOpened] = useState(false)

  const handlePickerOpen = (pickerType) =>  {
    if (pickerType === "first" && currentPicker === null) {
      setCurrentPicker(pickerType);
      setPickerOpened(true);
    } else if (pickerType === "second" && currentPicker === null) {
      setCurrentPicker(pickerType);
    } else if (pickerType === "third" && currentPicker === null) {
      setCurrentPicker(pickerType);
    } else if (pickerType === "fourth" && currentPicker === null) {
      setCurrentPicker(pickerType);
    } else if (pickerType === "fifth" && currentPicker === null) {
      setCurrentPicker(pickerType);
    } 
  }

    const handleColorChange = useCallback(
      (color) => {
        switch (currentPicker) {
          case "first":
            setPickers((prev) => {
              return { ...prev, first: color.hex };
            });
            break;
          case "second":
            setPickers((prev) => {
              return { ...prev, second: color.hex };
            });
            break;
          case "third":
            setPickers((prev) => {
              return { ...prev, third: color.hex };
            });
            break;
          case "fourth":
            setPickers((prev) => {
              return { ...prev, fourth: color.hex };
            });
            break;
          case "fifth":
            setPickers((prev) => {
              return { ...prev, fifth: color.hex };
            });
            break;
        }
      },
      [currentPicker]
    );

    const handleClear = () => {
        setCurrentPicker(null);
    };

  return (
    <div className={styles.pickers_container}>
      <div>
        <div className={styles.color_box}>
          <div
            className={styles.pop}
            style={{  backgroundColor: pickers.first }}
            onClick={() => handlePickerOpen("first")}
          />
          {currentPicker === null ? null : (
            <div
              className={styles.overlay}
              onClick={handleClear}
              style={{ backgroundColor: pickers.first }}
            />
          )}
        </div>
        {currentPicker === "first" && (
          <SketchPicker color={pickers.first} onChange={handleColorChange} />
        )}
      </div>

      <div>
        <div className={styles.color_box}>
          <div
            className={styles.pop}
            style={{ backgroundColor: pickers.second }}
            onClick={() => handlePickerOpen("second")}
          />
          {currentPicker === null ? null : (
            <div
              className={styles.overlay}
              onClick={handleClear}
              style={{ backgroundColor: pickers.second }}
            />
          )}
        </div>
        {currentPicker === "second" && (
          <SketchPicker color={pickers.second} onChange={handleColorChange} />
        )}
      </div>

      <div>
        <div className={styles.color_box}>
          <div
            className={styles.pop}
            style={{ backgroundColor: pickers.third }}
            onClick={() => handlePickerOpen("third")}
          />
          {currentPicker === null ? null : (
            <div
              className={styles.overlay}
              onClick={handleClear}
              style={{ backgroundColor: pickers.third }}
            />
          )}
        </div>
        {currentPicker === "third" && (
          <SketchPicker color={pickers.third} onChange={handleColorChange} />
        )}
      </div>

      <div>
        <div className={styles.color_box}>
          <div
            className={styles.pop}
            style={{ backgroundColor: pickers.fourth }}
            onClick={() => handlePickerOpen("fourth")}
          />
          {currentPicker === null ? null : (
            <div
              className={styles.overlay}
              onClick={handleClear}
              style={{ backgroundColor: pickers.fourth }}
            />
          )}
        </div>
        {currentPicker === "fourth" && (
          <SketchPicker color={pickers.fourth} onChange={handleColorChange} />
        )}
      </div>

      <div>
        <div className={styles.color_box}>
          <div
            className={styles.pop}
            style={{ backgroundColor: pickers.fifth }}
            onClick={() => handlePickerOpen("fifth")}
          />
          {currentPicker === null ? null : (
            <div
              className={styles.overlay}
              onClick={handleClear}
              style={{ backgroundColor: pickers.fifth }}
            />
          )}
        </div>
        {currentPicker === "fifth" && (
          <SketchPicker color={pickers.fifth} onChange={handleColorChange} />
        )}
      </div>
    </div>
  );
};

export default Picker;
