"use client";

import styles from "./header.module.css";
import Link from "next/link";
import { logout } from "@/cookies/auth.js";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.containerLogo}>
        <p className={styles.textLogo}>SPORTSEE</p>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/dashboard">Dashboard</Link>{" "}
          </li>
          <li className={styles.li}>Coach</li>
          <li className={styles.li}>
            <Link href="/profil">Mon profil</Link>
          </li>
          <li className={styles.li}>|</li>
          <li className={`${styles.li} ${styles.deconnection}`}>
            <button
              className={styles.logout}
              onClick={async () => await logout()}
            >
              Se déconnecter
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
