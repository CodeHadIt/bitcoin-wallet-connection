import styles from './page.module.css'
import Header from '@/components/Header/Header'
import Address from '@/components/Address/Address'


export default function Home() {
  
  return (
    <main className={styles.main}>
      <Header />
      <Address />
    </main>
  )
}
