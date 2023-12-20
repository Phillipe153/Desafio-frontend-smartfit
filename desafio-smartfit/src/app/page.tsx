import { Cards } from '@/components/Cards'
import { Form } from '@/components/Form'
import { Header } from '@/components/Header'
import { Lengenda } from '@/components/Lengenda'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
       <Form />
       <Lengenda />
       <Cards />
      </div>
    </main>
  )
}
