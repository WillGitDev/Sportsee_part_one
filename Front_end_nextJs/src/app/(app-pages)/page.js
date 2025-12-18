import Image from "next/image";
import styles from "./page.module.css";
import { login } from "@/cookies/auth";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.logo}>
            <h2 className={styles.textLogo}>SPORTSEE</h2>
          </div>
          <div className={styles.formContainer}>
            <form className={styles.form} action={login}>
              <h1 className={styles.title}>
                Transformez
                <br /> vos stats en résultats
              </h1>
              <p className={styles.connectionText}>Se connecter</p>
              <div>
                <label htmlFor="mail" className={styles.label}>
                  Adresse mail
                </label>
                <input
                  className={styles.inputText}
                  type="text"
                  name="mail"
                  id="mail"
                />
              </div>
              <div>
                <label htmlFor="password" className={styles.label}>
                  Mot de passe
                </label>
                <input
                  className={styles.inputText}
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              <button type="submit" className={styles.submit}>
                Se connecter
              </button>
              <p className={styles.textForgot}>Mot de passe oublié ?</p>
            </form>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="/images/background_picture.png"
            width={800}
            height={1024}
            alt="Des coureurs de marathon qui court"
          />
          <div className={styles.info}>
            <p>
              Analysez vos performances en un clin d'oeil, suivez vos progrès et
              atteignez vos objectifs.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function Auth({ mail, password }) {
  login(data.token);
}
