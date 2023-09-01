import Link from 'next/link'
import styles from './page.module.css'

const NotFound = () => {
  return (
    <div className={styles.main}>
        <div>
            <h2>404 Ikke fundet</h2>
            <p>Vi gjorde hvad vi kunne.</p>
            <Link href="/">Tilbage til forsiden</Link>
        </div>
    </div>
  )
}

export default NotFound