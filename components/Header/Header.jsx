"use client"
import React, { useContext, useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '../UI/Button/Button'
import ConnectModal from '../Modals/ConnectModal'
import styles from "./header.module.css"
import { AddressContext } from '@/context/AddressContext'

const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { userAddress } = useContext(AddressContext);
    useEffect(() => {
      if (userAddress) setModalOpen(false);
    }, [userAddress]);
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <div className={styles.title}>Home</div>
        </Link>
        <Button onClick={() => setModalOpen(true)} disabled={userAddress}>
          {userAddress
            ? userAddress.slice(0, 5) +
              "...." +
              userAddress.slice(userAddress.length - 5, userAddress.length)
            : "Connect Wallet"}
        </Button>
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