"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import useAuth from "@/utils/hooks/useAuth";
import ErrorBox from "@components/ErrorBox";

export default function Home() {
    const url = "/api/login";
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const { login, userId, token, isLoading, error, isUnauthorized } =
        useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        await login(url, mail, password);
    }

    console.log(userId, token, isLoading, error);
    return (
        <>
            {isUnauthorized && (
                <ErrorBox
                    isError={isUnauthorized}
                    text="Combinaisons mot de passe / identifiant invalide"
                />
            )}
            <main className={styles.main}>
                <div className={styles.contentContainer}>
                    <div className={styles.inputContainer}>
                        <div className={styles.logo}>
                            <h2 className={styles.textLogo}>SPORTSEE</h2>
                        </div>
                        <div className={styles.formContainer}>
                            <form
                                className={styles.form}
                                onSubmit={handleSubmit}
                            >
                                <h1 className={styles.title}>
                                    Transformez
                                    <br /> vos stats en résultats
                                </h1>
                                <p className={styles.connectionText}>
                                    Se connecter
                                </p>
                                <div>
                                    <label
                                        htmlFor="mail"
                                        className={styles.label}
                                    >
                                        Adresse mail
                                    </label>
                                    <input
                                        className={styles.inputText}
                                        type="mail"
                                        name="mail"
                                        id="mail"
                                        value={mail}
                                        onChange={(e) => {
                                            setMail(e.target.value);
                                        }}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className={styles.label}
                                    >
                                        Mot de passe
                                    </label>
                                    <input
                                        className={styles.inputText}
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    />
                                </div>
                                <button type="submit" className={styles.submit}>
                                    Se connecter
                                </button>
                                <p className={styles.textForgot}>
                                    Mot de passe oublié ?
                                </p>
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
                                Analysez vos performances en un clin d'oeil,
                                suivez vos progrès et atteignez vos objectifs.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

function handleSubmit(e, mail, password) {
    e.preventDefault();
    useAuth();
}
