import Image from 'next/image'
import styles from './boilerbox.module.css'
import Link from 'next/link';

const BoilerBox = () => {

    return   <div className={styles.boilerBox}>
        <Image src={'/square_logo.png'} alt={'Logo'} width={232} height={195}></Image>
        <div>
          <h1>NEXT JS TEMPLATE</h1>
          <p>Medieskolerne Viborg</p>
          <span>
          
            <Link href="/about">2023</Link>
            
          </span>
        </div>
  </div>

};

export default BoilerBox;