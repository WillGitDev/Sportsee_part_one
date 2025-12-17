import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.containerLogo}>
        <p className={styles.textLogo}>SPORTSEE</p>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>Dashboard</li>
          <li className={styles.li}>Coach</li>
          <li className={styles.li}>Mon profil</li>
          <li className={styles.li}>|</li>
          <li className={`${styles.li} ${styles.deconnection}`}>
            Se déconnecter
          </li>
        </ul>
      </nav>
    </header>
  );
}
