import Link from "next/link";
import Image from "next/image";

import styles from '../styles/NavBar.module.css';

export default function NavBar(){
  return(
    <nav className={styles.navBar}>
      <div className={styles.logo}>
        <Image src="/images/pokeball.png" width="30px" height="30" alt="PokeNext" />
        <h1>PokeNext</h1>
      </div>

      <ul className={styles.link_Itens}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">Sobre</Link></li>
      </ul>
    </nav>
  )
}