import styles from './page.module.css'
import Address from '@/components/Address/Address'


export default function Home() {
  
  return (
    <main className={styles.main}>
      <h2>Connect Your Wallet To Inscribe</h2>
      <Address />
    </main>
  )
}
