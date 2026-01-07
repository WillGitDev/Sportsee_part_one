import styles from "./dashboard.module.css";
import Image from "next/image";
import GraphWrapper from "@components/GraphWrapper";
import userActivityMapper from "@/services/mappers/userActivityMapper";
import userHeartRateMapper from "@/services/mappers/userHeartRateMapper";
import userKmMapper from "@/services/mappers/userKmMapper";
import data from "@/data/mockedData";
import GraphWrapperKm from "@components/GraphWrapperKm";
import GraphRunWrapper from "@components/GraphRunWrapper";
import test from "@/utils/test";

export default function Dashboard({ children }) {
    const activitiesInfo = userActivityMapper(data.apiUserActivity);
    const heartRate = userHeartRateMapper(data);
    const kmData = userKmMapper(data);
    //console.log("Les données de kmData", kmData);
    test();
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
                    src="/images/background_picture.png"
                    width={100}
                    height={120}
                    alt="Photo de profil"
                />
                <div className={styles.contentName}>
                    <p className={styles.name}>Clara Dupont</p>
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
                <GraphRunWrapper userActivity={data.apiUserActivity} />
            </div>
        </div>
    );
}
