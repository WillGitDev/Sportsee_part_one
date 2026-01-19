"use client";
import styles from "./dashboard.module.css";
import Image from "next/image";
import GraphWrapper from "@components/GraphWrapper";
import data from "@/data/mockedData";
import GraphWrapperKm from "@components/GraphWrapperKm";
import GraphRunWrapper from "@components/GraphRunWrapper";
import { useContext } from "react";
import { userContext } from "@/contexts/UserContext";
import Loading from "@components/Loading";
import ErrorBox from "@components/ErrorBox";

export default function Dashboard({ children }) {
    // const activitiesInfo = userActivityMapper(data.apiUserActivity);
    // const heartRate = userHeartRateMapper(data.apiUserActivity);
    // const kmData = userKmMapper(data.apiUserActivity);
    const {
        userInfo,
        userActivity,
        userHeartRate,
        userKm,
        isLoading,
        isError,
    } = useContext(userContext);

    if (isLoading) {
        return <Loading isLoading={true} />;
    }

    if (isError || !userInfo || !userActivity || !userHeartRate || !userKm) {
        return (
            <ErrorBox
                isError={true}
                text={"Erreur lors de la récupération des données"}
            />
        );
    }

    const activitiesInfo = userActivity;
    const heartRate = userHeartRate;
    const kmData = userKm;
    console.log(userInfo.profilePicture);
    return (
        <div className={styles.container}>
            <div className={styles.containerIaLaunch}>
                <p className={styles.textIaLaunch}>
                    <img
                        className={styles.logoIa}
                        src="/icone/icone_ai.svg"
                        alt="icone de trois étoiles"
                    />
                    Posez vos questions sur votre programme, vos performances ou
                    vos objectifs.
                </p>
                <button className={styles.buttonIaLaunch}>
                    Lancer une conversation
                </button>
            </div>
            <div className={styles.nameInfo}>
                <Image
                    className={styles.imgNext}
                    src={userInfo.profilePicture}
                    width={100}
                    height={120}
                    alt="Photo de profil"
                    unoptimized
                />
                <div className={styles.contentName}>
                    <p
                        className={styles.name}
                    >{`${userInfo.firstName} ${userInfo.lastName}`}</p>
                    <p>Membre depuis le 14 juin 2023</p>
                </div>
                <div className={styles.containerDistance}>
                    <p className={styles.textDistance}>
                        Distance totale parcourue
                    </p>
                    <div className={styles.nbrDistance}>
                        <img
                            src="/icone/drapeau.svg"
                            alt="icone d'une main tenant un drapeau"
                        />
                        <p>312 km</p>
                    </div>
                </div>
            </div>
            <div className={styles.containerGraph}>
                <GraphWrapperKm kmData={kmData} />
                <GraphWrapper heartRate={heartRate} />
            </div>
            <div className={styles.thisWeekContainer}>
                <GraphRunWrapper userActivity={activitiesInfo} />
            </div>
        </div>
    );
}
