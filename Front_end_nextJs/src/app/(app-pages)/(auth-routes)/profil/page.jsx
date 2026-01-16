"use client";

import styles from "./profile.module.css";
import Profile from "@/components/Profil";
import Statistics from "@components/Statistics";
import UserNameInfo from "@components/UserNameInfo";
import Loading from "@components/Loading";
import ErrorBox from "@components/ErrorBox";
import { useContext } from "react";
import { userContext } from "@/contexts/UserContext";

export default function ProfilPage() {
    // const userInfo = userInfoMapper(data.apiUserInfo);
    // const userActivity = userActivityMapper(data.apiUserActivity);

    const { userInfo, userActivity, isLoading, isError } =
        useContext(userContext);
    if (isLoading) {
        return <Loading isLoading={true} />;
    }
    if (isError || !userInfo || !userActivity) {
        return (
            <ErrorBox
                isError={true}
                text="Erreur lors de la récupération des données"
            />
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.infoUser}>
                <UserNameInfo
                    firstName={userInfo.firstName}
                    lastName={userInfo.lastName}
                    imgPath={userInfo.profilePicture}
                    dateStart={userInfo.createdAt}
                />
                <Profile
                    age={userInfo.age}
                    genre="Femme"
                    taille={userInfo.height}
                    poids={userInfo.weight}
                />
            </div>
            <Statistics
                dateStart={userActivity.startWith}
                timeTotal={"2"}
                distanceTotal={userInfo.totalDistance}
                nbrSessions={userInfo.totalSessions}
                calBurn={userActivity.totalCalBurn}
                nbrDaysRest={userActivity.daysRest}
            />
        </div>
    );
}
