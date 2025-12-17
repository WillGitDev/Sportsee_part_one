import styles from "./profile.module.css";
import Profile from "@components/Profile";
import Statistics from "@components/Statistics";
import UserNameInfo from "@components/UserNameInfo";
import data from "@/data/mockedData.json";
import userInfoMapper from "@/services/mappers/userInfoMapper";

export default function ProfilPage() {
  const userInfo = userInfoMapper(data);

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
        dateStart={"2"}
        timeTotal={"2"}
        distanceTotal={userInfo.totalDistance}
        nbrSessions={userInfo.totalSessions}
        calBurn={"2"}
        nbrDaysRest={"2"}
      />
    </div>
  );
}
