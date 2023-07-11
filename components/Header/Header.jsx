"use client"
import React, { useState } from 'react'
import Button from '../UI/Button/Button'
import ConnectModal from '../Modals/ConnectModal'
import styles from "./header.module.css"

const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    // const clearModal = () => {
    //     setModalOpen(false)
    // }
  return (
    <>
      <header className={styles.header}>
        <div className={styles.title}>Header</div>
        <Button onClick={() => setModalOpen(true)}>Connect Wallet</Button>
      </header>
      {modalOpen && (
        <ConnectModal
          modalOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

export default Header