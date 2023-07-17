"use client"
import { useState } from 'react'
import styles from './page.module.css'
import Address from '@/components/Address/Address'


export default function Home() {
  const [failedValidation, setFailedValidation] = useState(false);
  return (
    <main className={styles.main}>
      {failedValidation ? (
        <h2>You Have No Ordinal In Your Connected Wallet</h2>
      ) : (
        <h2>Connect Your Wallet To Inscribe</h2>
      )}
      <Address setFailedValidation={setFailedValidation} />
    </main>
  );
}
