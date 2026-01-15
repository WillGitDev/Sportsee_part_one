"use client";

import styles from "./profile.module.css";
import Profile from "@/components/Profil";
import Statistics from "@components/Statistics";
import UserNameInfo from "@components/UserNameInfo";
import data from "@/data/mockedData.json";
import userInfoMapper from "@/services/mappers/userInfoMapper";
import userActivityMapper from "@/services/mappers/userActivityMapper";
import useUserInfo from "@/utils/hooks/useUserInfo";
import { getToken } from "@/cookies/auth";
import useUserActivity from "@/utils/hooks/useUserActivity";
import Loading from "@components/Loading";
import ErrorBox from "@components/ErrorBox";

export default function ProfilPage() {
    const urlUserInfo = "/api/user-info";
    const urlUserActivity = "/api/user-activity";
    const startWeek = "2025-01-30";
    const endWeek = "2025-12-31";
    const token = getToken();

    const {
        isLoading: isLoadingInfo,
        dataUserInfo,
        isError: isErrorInfo,
    } = useUserInfo(urlUserInfo, token);

    const {
        isLoading: isLoadingActivity,
        dataUserActivity,
        isError: isErrorActivity,
    } = useUserActivity(urlUserActivity, token, startWeek, endWeek);

    if (isLoadingInfo || isLoadingActivity) return <Loading isLoading={true} />;
    if (isErrorInfo || isErrorActivity) {
        return (
            <ErrorBox
                isError={true}
                text="Erreur lors de la récupération des données"
            />
        );
    }

    // const userInfo = userInfoMapper(data.apiUserInfo);
    const userInfo = userInfoMapper(dataUserInfo);
    // const userActivity = userActivityMapper(data.apiUserActivity);
    const userActivity = userActivityMapper(dataUserActivity);
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
