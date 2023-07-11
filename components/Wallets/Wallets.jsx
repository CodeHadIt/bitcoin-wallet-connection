"use client"
import React from 'react'
import { RxCross1 } from "react-icons/rx";
import Image from 'next/image'
import Unisat from "@/public/assets/unisat_logo.png"
import Hiro from "@/public/assets/hiro_logo.png"
import Xverse from "@/public/assets/xverse_logo.png"

import styles from "./wallets.module.css"

const Wallets = ({ onClose, onWalletSelect }) => {
  return (
    <div className={styles.connectContainer}>
      <div className={styles.walletConnectHeading}>
        <h3>Connect your wallet to continue</h3>
        <RxCross1 className={styles.closeIcon} onClick={onClose} />
      </div>
      <p className={styles.paragraph}>
        Please ensure you have any of the below wallets installed.
      </p>
      <div className={styles.walletsContainer}>
        <div
          className={styles.wallets}
          onClick={() => onWalletSelect("unisat")}
        >
          <div className={styles.walletName}>
            <div className={styles.walletImageContainer}>
              <Image
                src={Unisat}
                alt="unisat-logo"
                fill={true}
                className={styles.img}
              />
            </div>
            <h4 className={styles.walletInfo}>Unisat</h4>
          </div>
          <div className={styles.checkCircle}>
            <div className={styles.innerCheck}></div>
          </div>
        </div>

        <div className={styles.wallets} onClick={() => onWalletSelect("hiro")}>
          <div className={styles.walletName}>
            <div className={styles.walletImageContainer}>
              <Image
                src={Hiro}
                alt="unisat-logo"
                fill={true}
                className={styles.img}
              />
            </div>
            <h4 className={styles.walletInfo}>Hiro</h4>
          </div>
          <div className={styles.checkCircle}>
            <div className={styles.innerCheck}></div>
          </div>
        </div>

        <div
          className={styles.wallets}
          onClick={() => onWalletSelect("xverse")}
        >
          <div className={styles.walletName}>
            <div className={styles.walletImageContainer}>
              <Image
                src={Xverse}
                alt="unisat-logo"
                fill={true}
                className={styles.img}
              />
            </div>
            <h4 className={styles.walletInfo}>Xverse</h4>
          </div>
          <div className={styles.checkCircle}>
            <div className={styles.innerCheck}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallets