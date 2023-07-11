"use client"
import React, { useContext } from 'react'
import Card from '../UI/Card/Card';
import WalletPortal from '../UI/Portals/WalletPortal';
import Wallets from '../Wallets/Wallets';
import { AddressContext } from '@/context/AddressContext';

import styles from "./connectModal.module.css"

const ConnectModal = ({ modalOpen, onClose }) => {
  const { getUserAddress } = useContext(AddressContext);

  return (
    <>
      {modalOpen && (
        <WalletPortal selector="#wallet-connect-modal">
          <div className={styles.backdrop}>
            <Card className={styles.modal}>
              <Wallets onClose={onClose} onWalletSelect={getUserAddress} />
            </Card>
          </div>
        </WalletPortal>
      )}
    </>
  );
}

export default ConnectModal