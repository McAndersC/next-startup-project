import Link from 'next/link';
import styles from './page.module.css';

const About = () => {

    return <div className={styles.main}>
        <div>
            <h1>About Page</h1>
            <Link href="/">Front Page</Link>
        </div>
    </div>

}

export default About;